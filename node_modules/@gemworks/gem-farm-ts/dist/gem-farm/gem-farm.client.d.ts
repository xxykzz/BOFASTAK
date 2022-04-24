/// <reference types="@solana/spl-token" />
import * as anchor from '@project-serum/anchor';
import { BN, Idl } from '@project-serum/anchor';
import { Connection, Keypair, PublicKey, TransactionInstruction } from '@solana/web3.js';
import { GemFarm } from '../types/gem_farm';
import { GemBankClient, WhitelistType } from '../gem-bank';
export declare const feeAccount: anchor.web3.PublicKey;
export declare const RewardType: {
    Variable: {
        variable: {};
    };
    Fixed: {
        fixed: {};
    };
};
export interface FarmConfig {
    minStakingPeriodSec: BN;
    cooldownPeriodSec: BN;
    unstakingFeeLamp: BN;
}
export interface MaxCounts {
    maxFarmers: number;
    maxGems: number;
    maxRarityPoints: number;
}
export interface TierConfig {
    rewardRate: BN;
    requiredTenure: BN;
}
export interface FixedRateSchedule {
    baseRate: BN;
    tier1: TierConfig | null;
    tier2: TierConfig | null;
    tier3: TierConfig | null;
    denominator: BN;
}
export interface FixedRateConfig {
    schedule: FixedRateSchedule;
    amount: BN;
    durationSec: BN;
}
export interface VariableRateConfig {
    amount: BN;
    durationSec: BN;
}
export interface RarityConfig {
    mint: PublicKey;
    rarityPoints: number;
}
export declare class GemFarmClient extends GemBankClient {
    farmProgram: anchor.Program<GemFarm>;
    constructor(conn: Connection, wallet: anchor.Wallet, farmIdl?: Idl, farmProgramId?: PublicKey, bankIdl?: Idl, bankProgramId?: PublicKey);
    setFarmProgram(idl?: Idl, programId?: PublicKey): void;
    fetchFarmAcc(farm: PublicKey): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "authorizationProof";
        type: {
            kind: "struct";
            fields: [{
                name: "authorizedFunder";
                type: "publicKey";
            }, {
                name: "farm";
                type: "publicKey";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "farm";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "farmManager";
                type: "publicKey";
            }, {
                name: "farmTreasury";
                type: "publicKey";
            }, {
                name: "farmAuthority";
                type: "publicKey";
            }, {
                name: "farmAuthoritySeed";
                type: "publicKey";
            }, {
                name: "farmAuthorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "bank";
                type: "publicKey";
            }, {
                name: "config";
                type: {
                    defined: "FarmConfig";
                };
            }, {
                name: "farmerCount";
                type: "u64";
            }, {
                name: "stakedFarmerCount";
                type: "u64";
            }, {
                name: "gemsStaked";
                type: "u64";
            }, {
                name: "rarityPointsStaked";
                type: "u64";
            }, {
                name: "authorizedFunderCount";
                type: "u64";
            }, {
                name: "rewardA";
                type: {
                    defined: "FarmReward";
                };
            }, {
                name: "rewardB";
                type: {
                    defined: "FarmReward";
                };
            }, {
                name: "maxCounts";
                type: {
                    defined: "MaxCounts";
                };
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "reserved2";
                type: {
                    array: ["u8", 16];
                };
            }, {
                name: "reserved3";
                type: {
                    array: ["u8", 4];
                };
            }];
        };
    } | {
        name: "farmer";
        type: {
            kind: "struct";
            fields: [{
                name: "farm";
                type: "publicKey";
            }, {
                name: "identity";
                type: "publicKey";
            }, {
                name: "vault";
                type: "publicKey";
            }, {
                name: "state";
                type: {
                    defined: "FarmerState";
                };
            }, {
                name: "gemsStaked";
                type: "u64";
            }, {
                name: "rarityPointsStaked";
                type: "u64";
            }, {
                name: "minStakingEndsTs";
                type: "u64";
            }, {
                name: "cooldownEndsTs";
                type: "u64";
            }, {
                name: "rewardA";
                type: {
                    defined: "FarmerReward";
                };
            }, {
                name: "rewardB";
                type: {
                    defined: "FarmerReward";
                };
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    }, anchor.IdlTypes<GemFarm>>>;
    fetchFarmerAcc(farmer: PublicKey): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "authorizationProof";
        type: {
            kind: "struct";
            fields: [{
                name: "authorizedFunder";
                type: "publicKey";
            }, {
                name: "farm";
                type: "publicKey";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "farm";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "farmManager";
                type: "publicKey";
            }, {
                name: "farmTreasury";
                type: "publicKey";
            }, {
                name: "farmAuthority";
                type: "publicKey";
            }, {
                name: "farmAuthoritySeed";
                type: "publicKey";
            }, {
                name: "farmAuthorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "bank";
                type: "publicKey";
            }, {
                name: "config";
                type: {
                    defined: "FarmConfig";
                };
            }, {
                name: "farmerCount";
                type: "u64";
            }, {
                name: "stakedFarmerCount";
                type: "u64";
            }, {
                name: "gemsStaked";
                type: "u64";
            }, {
                name: "rarityPointsStaked";
                type: "u64";
            }, {
                name: "authorizedFunderCount";
                type: "u64";
            }, {
                name: "rewardA";
                type: {
                    defined: "FarmReward";
                };
            }, {
                name: "rewardB";
                type: {
                    defined: "FarmReward";
                };
            }, {
                name: "maxCounts";
                type: {
                    defined: "MaxCounts";
                };
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "reserved2";
                type: {
                    array: ["u8", 16];
                };
            }, {
                name: "reserved3";
                type: {
                    array: ["u8", 4];
                };
            }];
        };
    } | {
        name: "farmer";
        type: {
            kind: "struct";
            fields: [{
                name: "farm";
                type: "publicKey";
            }, {
                name: "identity";
                type: "publicKey";
            }, {
                name: "vault";
                type: "publicKey";
            }, {
                name: "state";
                type: {
                    defined: "FarmerState";
                };
            }, {
                name: "gemsStaked";
                type: "u64";
            }, {
                name: "rarityPointsStaked";
                type: "u64";
            }, {
                name: "minStakingEndsTs";
                type: "u64";
            }, {
                name: "cooldownEndsTs";
                type: "u64";
            }, {
                name: "rewardA";
                type: {
                    defined: "FarmerReward";
                };
            }, {
                name: "rewardB";
                type: {
                    defined: "FarmerReward";
                };
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    }, anchor.IdlTypes<GemFarm>>>;
    fetchAuthorizationProofAcc(authorizationProof: PublicKey): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "authorizationProof";
        type: {
            kind: "struct";
            fields: [{
                name: "authorizedFunder";
                type: "publicKey";
            }, {
                name: "farm";
                type: "publicKey";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "farm";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "farmManager";
                type: "publicKey";
            }, {
                name: "farmTreasury";
                type: "publicKey";
            }, {
                name: "farmAuthority";
                type: "publicKey";
            }, {
                name: "farmAuthoritySeed";
                type: "publicKey";
            }, {
                name: "farmAuthorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "bank";
                type: "publicKey";
            }, {
                name: "config";
                type: {
                    defined: "FarmConfig";
                };
            }, {
                name: "farmerCount";
                type: "u64";
            }, {
                name: "stakedFarmerCount";
                type: "u64";
            }, {
                name: "gemsStaked";
                type: "u64";
            }, {
                name: "rarityPointsStaked";
                type: "u64";
            }, {
                name: "authorizedFunderCount";
                type: "u64";
            }, {
                name: "rewardA";
                type: {
                    defined: "FarmReward";
                };
            }, {
                name: "rewardB";
                type: {
                    defined: "FarmReward";
                };
            }, {
                name: "maxCounts";
                type: {
                    defined: "MaxCounts";
                };
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "reserved2";
                type: {
                    array: ["u8", 16];
                };
            }, {
                name: "reserved3";
                type: {
                    array: ["u8", 4];
                };
            }];
        };
    } | {
        name: "farmer";
        type: {
            kind: "struct";
            fields: [{
                name: "farm";
                type: "publicKey";
            }, {
                name: "identity";
                type: "publicKey";
            }, {
                name: "vault";
                type: "publicKey";
            }, {
                name: "state";
                type: {
                    defined: "FarmerState";
                };
            }, {
                name: "gemsStaked";
                type: "u64";
            }, {
                name: "rarityPointsStaked";
                type: "u64";
            }, {
                name: "minStakingEndsTs";
                type: "u64";
            }, {
                name: "cooldownEndsTs";
                type: "u64";
            }, {
                name: "rewardA";
                type: {
                    defined: "FarmerReward";
                };
            }, {
                name: "rewardB";
                type: {
                    defined: "FarmerReward";
                };
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    }, anchor.IdlTypes<GemFarm>>>;
    fetchTokenAcc(rewardMint: PublicKey, rewardAcc: PublicKey): Promise<import("@solana/spl-token").AccountInfo>;
    fetchTreasuryBalance(farm: PublicKey): Promise<number>;
    fetchAllFarmPDAs(manager?: PublicKey): Promise<anchor.ProgramAccount<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "authorizationProof";
        type: {
            kind: "struct";
            fields: [{
                name: "authorizedFunder";
                type: "publicKey";
            }, {
                name: "farm";
                type: "publicKey";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "farm";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "farmManager";
                type: "publicKey";
            }, {
                name: "farmTreasury";
                type: "publicKey";
            }, {
                name: "farmAuthority";
                type: "publicKey";
            }, {
                name: "farmAuthoritySeed";
                type: "publicKey";
            }, {
                name: "farmAuthorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "bank";
                type: "publicKey";
            }, {
                name: "config";
                type: {
                    defined: "FarmConfig";
                };
            }, {
                name: "farmerCount";
                type: "u64";
            }, {
                name: "stakedFarmerCount";
                type: "u64";
            }, {
                name: "gemsStaked";
                type: "u64";
            }, {
                name: "rarityPointsStaked";
                type: "u64";
            }, {
                name: "authorizedFunderCount";
                type: "u64";
            }, {
                name: "rewardA";
                type: {
                    defined: "FarmReward";
                };
            }, {
                name: "rewardB";
                type: {
                    defined: "FarmReward";
                };
            }, {
                name: "maxCounts";
                type: {
                    defined: "MaxCounts";
                };
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "reserved2";
                type: {
                    array: ["u8", 16];
                };
            }, {
                name: "reserved3";
                type: {
                    array: ["u8", 4];
                };
            }];
        };
    } | {
        name: "farmer";
        type: {
            kind: "struct";
            fields: [{
                name: "farm";
                type: "publicKey";
            }, {
                name: "identity";
                type: "publicKey";
            }, {
                name: "vault";
                type: "publicKey";
            }, {
                name: "state";
                type: {
                    defined: "FarmerState";
                };
            }, {
                name: "gemsStaked";
                type: "u64";
            }, {
                name: "rarityPointsStaked";
                type: "u64";
            }, {
                name: "minStakingEndsTs";
                type: "u64";
            }, {
                name: "cooldownEndsTs";
                type: "u64";
            }, {
                name: "rewardA";
                type: {
                    defined: "FarmerReward";
                };
            }, {
                name: "rewardB";
                type: {
                    defined: "FarmerReward";
                };
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    }, anchor.IdlTypes<GemFarm>>>[]>;
    fetchAllFarmerPDAs(farm?: PublicKey, identity?: PublicKey): Promise<anchor.ProgramAccount<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "authorizationProof";
        type: {
            kind: "struct";
            fields: [{
                name: "authorizedFunder";
                type: "publicKey";
            }, {
                name: "farm";
                type: "publicKey";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "farm";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "farmManager";
                type: "publicKey";
            }, {
                name: "farmTreasury";
                type: "publicKey";
            }, {
                name: "farmAuthority";
                type: "publicKey";
            }, {
                name: "farmAuthoritySeed";
                type: "publicKey";
            }, {
                name: "farmAuthorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "bank";
                type: "publicKey";
            }, {
                name: "config";
                type: {
                    defined: "FarmConfig";
                };
            }, {
                name: "farmerCount";
                type: "u64";
            }, {
                name: "stakedFarmerCount";
                type: "u64";
            }, {
                name: "gemsStaked";
                type: "u64";
            }, {
                name: "rarityPointsStaked";
                type: "u64";
            }, {
                name: "authorizedFunderCount";
                type: "u64";
            }, {
                name: "rewardA";
                type: {
                    defined: "FarmReward";
                };
            }, {
                name: "rewardB";
                type: {
                    defined: "FarmReward";
                };
            }, {
                name: "maxCounts";
                type: {
                    defined: "MaxCounts";
                };
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "reserved2";
                type: {
                    array: ["u8", 16];
                };
            }, {
                name: "reserved3";
                type: {
                    array: ["u8", 4];
                };
            }];
        };
    } | {
        name: "farmer";
        type: {
            kind: "struct";
            fields: [{
                name: "farm";
                type: "publicKey";
            }, {
                name: "identity";
                type: "publicKey";
            }, {
                name: "vault";
                type: "publicKey";
            }, {
                name: "state";
                type: {
                    defined: "FarmerState";
                };
            }, {
                name: "gemsStaked";
                type: "u64";
            }, {
                name: "rarityPointsStaked";
                type: "u64";
            }, {
                name: "minStakingEndsTs";
                type: "u64";
            }, {
                name: "cooldownEndsTs";
                type: "u64";
            }, {
                name: "rewardA";
                type: {
                    defined: "FarmerReward";
                };
            }, {
                name: "rewardB";
                type: {
                    defined: "FarmerReward";
                };
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    }, anchor.IdlTypes<GemFarm>>>[]>;
    fetchAllAuthProofPDAs(farm?: PublicKey, funder?: PublicKey): Promise<anchor.ProgramAccount<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "authorizationProof";
        type: {
            kind: "struct";
            fields: [{
                name: "authorizedFunder";
                type: "publicKey";
            }, {
                name: "farm";
                type: "publicKey";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "farm";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "farmManager";
                type: "publicKey";
            }, {
                name: "farmTreasury";
                type: "publicKey";
            }, {
                name: "farmAuthority";
                type: "publicKey";
            }, {
                name: "farmAuthoritySeed";
                type: "publicKey";
            }, {
                name: "farmAuthorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "bank";
                type: "publicKey";
            }, {
                name: "config";
                type: {
                    defined: "FarmConfig";
                };
            }, {
                name: "farmerCount";
                type: "u64";
            }, {
                name: "stakedFarmerCount";
                type: "u64";
            }, {
                name: "gemsStaked";
                type: "u64";
            }, {
                name: "rarityPointsStaked";
                type: "u64";
            }, {
                name: "authorizedFunderCount";
                type: "u64";
            }, {
                name: "rewardA";
                type: {
                    defined: "FarmReward";
                };
            }, {
                name: "rewardB";
                type: {
                    defined: "FarmReward";
                };
            }, {
                name: "maxCounts";
                type: {
                    defined: "MaxCounts";
                };
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "reserved2";
                type: {
                    array: ["u8", 16];
                };
            }, {
                name: "reserved3";
                type: {
                    array: ["u8", 4];
                };
            }];
        };
    } | {
        name: "farmer";
        type: {
            kind: "struct";
            fields: [{
                name: "farm";
                type: "publicKey";
            }, {
                name: "identity";
                type: "publicKey";
            }, {
                name: "vault";
                type: "publicKey";
            }, {
                name: "state";
                type: {
                    defined: "FarmerState";
                };
            }, {
                name: "gemsStaked";
                type: "u64";
            }, {
                name: "rarityPointsStaked";
                type: "u64";
            }, {
                name: "minStakingEndsTs";
                type: "u64";
            }, {
                name: "cooldownEndsTs";
                type: "u64";
            }, {
                name: "rewardA";
                type: {
                    defined: "FarmerReward";
                };
            }, {
                name: "rewardB";
                type: {
                    defined: "FarmerReward";
                };
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    }, anchor.IdlTypes<GemFarm>>>[]>;
    initFarm(farm: Keypair, farmManager: PublicKey | Keypair, payer: PublicKey | Keypair, bank: Keypair, rewardAMint: PublicKey, rewardAType: any, //RewardType instance
    rewardBMint: PublicKey, rewardBType: any, //RewardType instance
    farmConfig: FarmConfig, maxCounts?: MaxCounts): Promise<{
        farmAuth: anchor.web3.PublicKey;
        farmAuthBump: number;
        farmTreasury: anchor.web3.PublicKey;
        farmTreasuryBump: number;
        rewardAPot: anchor.web3.PublicKey;
        rewardAPotBump: number;
        rewardBPot: anchor.web3.PublicKey;
        rewardBPotBump: number;
        txSig: string;
    }>;
    updateFarm(farm: PublicKey, farmManager: PublicKey | Keypair, config?: FarmConfig | null, newManager?: PublicKey | null, maxCounts?: MaxCounts): Promise<{
        txSig: string;
    }>;
    payoutFromTreasury(farm: PublicKey, farmManager: PublicKey | Keypair, destination: PublicKey, lamports: BN): Promise<{
        farmAuth: anchor.web3.PublicKey;
        farmAuthBump: number;
        farmTreasury: anchor.web3.PublicKey;
        farmTreasuryBump: number;
        txSig: string;
    }>;
    addToBankWhitelist(farm: PublicKey, farmManager: PublicKey | Keypair, addressToWhitelist: PublicKey, whitelistType: WhitelistType): Promise<{
        farmAuth: anchor.web3.PublicKey;
        farmAuthBump: number;
        whitelistProof: anchor.web3.PublicKey;
        whitelistProofBump: number;
        txSig: string;
    }>;
    removeFromBankWhitelist(farm: PublicKey, farmManager: PublicKey | Keypair, addressToRemove: PublicKey): Promise<{
        farmAuth: anchor.web3.PublicKey;
        farmAuthBump: number;
        whitelistProof: anchor.web3.PublicKey;
        whitelistProofBump: number;
        txSig: string;
    }>;
    initFarmer(farm: PublicKey, farmerIdentity: PublicKey | Keypair, payer: PublicKey | Keypair): Promise<{
        farmer: anchor.web3.PublicKey;
        farmerBump: number;
        vault: anchor.web3.PublicKey;
        vaultBump: number;
        vaultAuth: anchor.web3.PublicKey;
        vaultAuthBump: number;
        txSig: string;
    }>;
    stakeCommon(farm: PublicKey, farmerIdentity: PublicKey | Keypair, unstake?: boolean, skipRewards?: boolean): Promise<{
        farmer: anchor.web3.PublicKey;
        farmerBump: number;
        vault: anchor.web3.PublicKey;
        vaultBump: number;
        farmAuth: anchor.web3.PublicKey;
        farmAuthBump: number;
        farmTreasury: anchor.web3.PublicKey;
        farmTreasuryBump: number;
        txSig: any;
    }>;
    stake(farm: PublicKey, farmerIdentity: PublicKey | Keypair): Promise<{
        farmer: anchor.web3.PublicKey;
        farmerBump: number;
        vault: anchor.web3.PublicKey;
        vaultBump: number;
        farmAuth: anchor.web3.PublicKey;
        farmAuthBump: number;
        farmTreasury: anchor.web3.PublicKey;
        farmTreasuryBump: number;
        txSig: any;
    }>;
    unstake(farm: PublicKey, farmerIdentity: PublicKey | Keypair, skipRewards?: boolean): Promise<{
        farmer: anchor.web3.PublicKey;
        farmerBump: number;
        vault: anchor.web3.PublicKey;
        vaultBump: number;
        farmAuth: anchor.web3.PublicKey;
        farmAuthBump: number;
        farmTreasury: anchor.web3.PublicKey;
        farmTreasuryBump: number;
        txSig: any;
    }>;
    claim(farm: PublicKey, farmerIdentity: PublicKey | Keypair, rewardAMint: PublicKey, rewardBMint: PublicKey): Promise<{
        farmAuth: anchor.web3.PublicKey;
        farmAuthBump: number;
        farmer: anchor.web3.PublicKey;
        farmerBump: number;
        potA: anchor.web3.PublicKey;
        potABump: number;
        potB: anchor.web3.PublicKey;
        potBBump: number;
        rewardADestination: anchor.web3.PublicKey;
        rewardBDestination: anchor.web3.PublicKey;
        txSig: string;
    }>;
    flashDeposit(farm: PublicKey, farmerIdentity: PublicKey | Keypair, gemAmount: BN, gemMint: PublicKey, gemSource: PublicKey, mintProof?: PublicKey, metadata?: PublicKey, creatorProof?: PublicKey): Promise<{
        farmer: anchor.web3.PublicKey;
        farmerBump: number;
        vault: anchor.web3.PublicKey;
        vaultBump: number;
        farmAuth: anchor.web3.PublicKey;
        farmAuthBump: number;
        gemBox: anchor.web3.PublicKey;
        gemBoxBump: number;
        GDR: anchor.web3.PublicKey;
        GDRBump: number;
        vaultAuth: anchor.web3.PublicKey;
        vaultAuthBump: number;
        txSig: string;
    }>;
    refreshFarmer(farm: PublicKey, farmerIdentity: PublicKey | Keypair, reenroll?: boolean): Promise<{
        farmer: anchor.web3.PublicKey;
        farmerBump: number;
        txSig: any;
    }>;
    authorizeCommon(farm: PublicKey, farmManager: PublicKey | Keypair, funder: PublicKey, deauthorize?: boolean): Promise<{
        authorizationProof: anchor.web3.PublicKey;
        authorizationProofBump: number;
        txSig: any;
    }>;
    authorizeFunder(farm: PublicKey, farmManager: PublicKey | Keypair, funderToAuthorize: PublicKey): Promise<{
        authorizationProof: anchor.web3.PublicKey;
        authorizationProofBump: number;
        txSig: any;
    }>;
    deauthorizeFunder(farm: PublicKey, farmManager: PublicKey | Keypair, funderToDeauthorize: PublicKey): Promise<{
        authorizationProof: anchor.web3.PublicKey;
        authorizationProofBump: number;
        txSig: any;
    }>;
    fundReward(farm: PublicKey, rewardMint: PublicKey, funder: PublicKey | Keypair, rewardSource: PublicKey, variableRateConfig?: VariableRateConfig | null, fixedRateConfig?: FixedRateConfig | null): Promise<{
        farmAuth: anchor.web3.PublicKey;
        farmAuthBump: number;
        authorizationProof: anchor.web3.PublicKey;
        authorizationProofBump: number;
        pot: anchor.web3.PublicKey;
        potBump: number;
        txSig: string;
    }>;
    cancelReward(farm: PublicKey, farmManager: PublicKey | Keypair, rewardMint: PublicKey, receiver: PublicKey): Promise<{
        farmAuth: anchor.web3.PublicKey;
        farmAuthBump: number;
        pot: anchor.web3.PublicKey;
        potBump: number;
        rewardDestination: anchor.web3.PublicKey;
        txSig: string;
    }>;
    lockReward(farm: PublicKey, farmManager: PublicKey | Keypair, rewardMint: PublicKey): Promise<{
        txSig: string;
    }>;
    addRaritiesToBank(farm: PublicKey, farmManager: PublicKey | Keypair, rarityConfigs: RarityConfig[]): Promise<{
        bank: anchor.web3.PublicKey;
        farmAuth: anchor.web3.PublicKey;
        farmAuthBump: number;
        completeRarityConfigs: RarityConfig[];
        txSig: string;
    }>;
    parseRewardType(reward: any): string;
    parseFarmerState(farmer: any): string;
    createExtraComputeIx(newComputeBudget: number): TransactionInstruction;
}
