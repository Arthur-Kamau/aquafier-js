

export interface Timestamp {
    seconds: number;
    nanos: number;
}


export interface RevisionAquaChainResult {
    successful: boolean,
    revisionResults : Array<RevisionVerificationResult>
}

export interface RevisionVerificationResult {
    successful: boolean,
    file_verification: ResultStatus,
    content_verification: ResultStatus,
    witness_verification: ResultStatus,
    signature_verification: ResultStatus,
    metadata_verification: ResultStatus,
}

export enum ResultStatusEnum {
    MISSING,
    AVAILABLE
}

export interface ResultStatus {
    status: ResultStatusEnum
    successful: boolean
    message: string
}

export interface VerifyFileResult {
    error_message: string | null,
    file_hash: string | null
}

export interface MerkleNode{
    left_leaf: string,
    right_leaf: string,
    successor: string,
}

export interface CheckEtherScanResult {
    verificationHashMatches: boolean
    message: string
    successful: boolean
}