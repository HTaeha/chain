// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeletePost } from "./types/chain/tx";
import { MsgCreatePost } from "./types/chain/tx";
import { MsgUpdatePost } from "./types/chain/tx";
const types = [
    ["/alice.chain.chain.MsgDeletePost", MsgDeletePost],
    ["/alice.chain.chain.MsgCreatePost", MsgCreatePost],
    ["/alice.chain.chain.MsgUpdatePost", MsgUpdatePost],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeletePost: (data) => ({ typeUrl: "/alice.chain.chain.MsgDeletePost", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/alice.chain.chain.MsgCreatePost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/alice.chain.chain.MsgUpdatePost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
