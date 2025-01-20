// Import necessary types if needed (adjust based on your setup)
// import { Revision } from './revision';

import { Timestamp } from "./library_models";

export interface AquaChain {
    fileIndex:  Record<string, string>;// [string, string][];
    revisions:  Record<string, Revision> ;//[string, Revision][];
}
export interface Revision {
    previousVerificationHash: string;
    nonce: string;
    localTimestamp: Timestamp;
    revisionType: string;
    fileHash?: string | null;
    content?: string | null;
    linkType?: string | null;
    linkRequireIndepthVerification?: boolean | null;
    linkVerificationHash?: string | null;
    linkUri?: string | null;
    signature?: string | null;
    signaturePublicKey?: string | null;
    signatureWalletAddress?: string | null;
    signatureType?: string | null;
    witnessMerkleRoot?: string | null;
    witnessTimestamp?: Timestamp | null;
    witnessNetwork?: string | null;
    witnessSmartContractAddress?: string | null;
    witnessTransactionHash?: string | null;
    witnessSenderAccountAddress?: string | null;
    leaves?: string[] | null;
}

// Utility function to serialize a Revision object
export function toJSONWithoutNulls<T extends Record<string, any>>(obj: T): string {
    const filteredObj = Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value !== null)
    );
    return JSON.stringify(filteredObj);
}


export enum ProtocolLogsType {
    ERROR = "ERROR",
    WARNING = "WARNING",
    INFO = "INFO",
}

export interface ProtocolLogs {
    log: string;
    logType: ProtocolLogsType;
}
