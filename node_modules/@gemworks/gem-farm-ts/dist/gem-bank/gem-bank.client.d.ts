import * as anchor from '@project-serum/anchor';
import { BN, Idl } from '@project-serum/anchor';
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { AccountInfo } from '@solana/spl-token';
import { AccountUtils } from '../gem-common';
import { GemBank } from '../types/gem_bank';
export declare enum BankFlags {
    FreezeVaults = 1
}
export declare enum WhitelistType {
    Creator = 1,
    Mint = 2
}
export declare class GemBankClient extends AccountUtils {
    wallet: anchor.Wallet;
    provider: anchor.Provider;
    bankProgram: anchor.Program<GemBank>;
    constructor(conn: Connection, wallet: anchor.Wallet, idl?: Idl, programId?: PublicKey);
    setProvider(): void;
    setBankProgram(idl?: Idl, programId?: PublicKey): void;
    fetchBankAcc(bank: PublicKey): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "bank";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "bankManager";
                type: "publicKey";
            }, {
                name: "flags";
                type: "u32";
            }, {
                name: "whitelistedCreators";
                type: "u32";
            }, {
                name: "whitelistedMints";
                type: "u32";
            }, {
                name: "vaultCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "gemDepositReceipt";
        type: {
            kind: "struct";
            fields: [{
                name: "vault";
                type: "publicKey";
            }, {
                name: "gemBoxAddress";
                type: "publicKey";
            }, {
                name: "gemMint";
                type: "publicKey";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "rarity";
        type: {
            kind: "struct";
            fields: [{
                name: "points";
                type: "u16";
            }];
        };
    } | {
        name: "vault";
        type: {
            kind: "struct";
            fields: [{
                name: "bank";
                type: "publicKey";
            }, {
                name: "owner";
                type: "publicKey";
            }, {
                name: "creator";
                type: "publicKey";
            }, {
                name: "authority";
                type: "publicKey";
            }, {
                name: "authoritySeed";
                type: "publicKey";
            }, {
                name: "authorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "locked";
                type: "bool";
            }, {
                name: "name";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "gemBoxCount";
                type: "u64";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "rarityPoints";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "whitelistProof";
        type: {
            kind: "struct";
            fields: [{
                name: "whitelistType";
                type: "u8";
            }, {
                name: "whitelistedAddress";
                type: "publicKey";
            }, {
                name: "bank";
                type: "publicKey";
            }];
        };
    }, anchor.IdlTypes<GemBank>>>;
    fetchVaultAcc(vault: PublicKey): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "bank";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "bankManager";
                type: "publicKey";
            }, {
                name: "flags";
                type: "u32";
            }, {
                name: "whitelistedCreators";
                type: "u32";
            }, {
                name: "whitelistedMints";
                type: "u32";
            }, {
                name: "vaultCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "gemDepositReceipt";
        type: {
            kind: "struct";
            fields: [{
                name: "vault";
                type: "publicKey";
            }, {
                name: "gemBoxAddress";
                type: "publicKey";
            }, {
                name: "gemMint";
                type: "publicKey";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "rarity";
        type: {
            kind: "struct";
            fields: [{
                name: "points";
                type: "u16";
            }];
        };
    } | {
        name: "vault";
        type: {
            kind: "struct";
            fields: [{
                name: "bank";
                type: "publicKey";
            }, {
                name: "owner";
                type: "publicKey";
            }, {
                name: "creator";
                type: "publicKey";
            }, {
                name: "authority";
                type: "publicKey";
            }, {
                name: "authoritySeed";
                type: "publicKey";
            }, {
                name: "authorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "locked";
                type: "bool";
            }, {
                name: "name";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "gemBoxCount";
                type: "u64";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "rarityPoints";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "whitelistProof";
        type: {
            kind: "struct";
            fields: [{
                name: "whitelistType";
                type: "u8";
            }, {
                name: "whitelistedAddress";
                type: "publicKey";
            }, {
                name: "bank";
                type: "publicKey";
            }];
        };
    }, anchor.IdlTypes<GemBank>>>;
    fetchGDRAcc(GDR: PublicKey): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "bank";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "bankManager";
                type: "publicKey";
            }, {
                name: "flags";
                type: "u32";
            }, {
                name: "whitelistedCreators";
                type: "u32";
            }, {
                name: "whitelistedMints";
                type: "u32";
            }, {
                name: "vaultCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "gemDepositReceipt";
        type: {
            kind: "struct";
            fields: [{
                name: "vault";
                type: "publicKey";
            }, {
                name: "gemBoxAddress";
                type: "publicKey";
            }, {
                name: "gemMint";
                type: "publicKey";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "rarity";
        type: {
            kind: "struct";
            fields: [{
                name: "points";
                type: "u16";
            }];
        };
    } | {
        name: "vault";
        type: {
            kind: "struct";
            fields: [{
                name: "bank";
                type: "publicKey";
            }, {
                name: "owner";
                type: "publicKey";
            }, {
                name: "creator";
                type: "publicKey";
            }, {
                name: "authority";
                type: "publicKey";
            }, {
                name: "authoritySeed";
                type: "publicKey";
            }, {
                name: "authorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "locked";
                type: "bool";
            }, {
                name: "name";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "gemBoxCount";
                type: "u64";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "rarityPoints";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "whitelistProof";
        type: {
            kind: "struct";
            fields: [{
                name: "whitelistType";
                type: "u8";
            }, {
                name: "whitelistedAddress";
                type: "publicKey";
            }, {
                name: "bank";
                type: "publicKey";
            }];
        };
    }, anchor.IdlTypes<GemBank>>>;
    fetchGemAcc(mint: PublicKey, gemAcc: PublicKey): Promise<AccountInfo>;
    fetchWhitelistProofAcc(proof: PublicKey): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "bank";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "bankManager";
                type: "publicKey";
            }, {
                name: "flags";
                type: "u32";
            }, {
                name: "whitelistedCreators";
                type: "u32";
            }, {
                name: "whitelistedMints";
                type: "u32";
            }, {
                name: "vaultCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "gemDepositReceipt";
        type: {
            kind: "struct";
            fields: [{
                name: "vault";
                type: "publicKey";
            }, {
                name: "gemBoxAddress";
                type: "publicKey";
            }, {
                name: "gemMint";
                type: "publicKey";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "rarity";
        type: {
            kind: "struct";
            fields: [{
                name: "points";
                type: "u16";
            }];
        };
    } | {
        name: "vault";
        type: {
            kind: "struct";
            fields: [{
                name: "bank";
                type: "publicKey";
            }, {
                name: "owner";
                type: "publicKey";
            }, {
                name: "creator";
                type: "publicKey";
            }, {
                name: "authority";
                type: "publicKey";
            }, {
                name: "authoritySeed";
                type: "publicKey";
            }, {
                name: "authorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "locked";
                type: "bool";
            }, {
                name: "name";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "gemBoxCount";
                type: "u64";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "rarityPoints";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "whitelistProof";
        type: {
            kind: "struct";
            fields: [{
                name: "whitelistType";
                type: "u8";
            }, {
                name: "whitelistedAddress";
                type: "publicKey";
            }, {
                name: "bank";
                type: "publicKey";
            }];
        };
    }, anchor.IdlTypes<GemBank>>>;
    fetchRarity(rarity: PublicKey): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "bank";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "bankManager";
                type: "publicKey";
            }, {
                name: "flags";
                type: "u32";
            }, {
                name: "whitelistedCreators";
                type: "u32";
            }, {
                name: "whitelistedMints";
                type: "u32";
            }, {
                name: "vaultCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "gemDepositReceipt";
        type: {
            kind: "struct";
            fields: [{
                name: "vault";
                type: "publicKey";
            }, {
                name: "gemBoxAddress";
                type: "publicKey";
            }, {
                name: "gemMint";
                type: "publicKey";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "rarity";
        type: {
            kind: "struct";
            fields: [{
                name: "points";
                type: "u16";
            }];
        };
    } | {
        name: "vault";
        type: {
            kind: "struct";
            fields: [{
                name: "bank";
                type: "publicKey";
            }, {
                name: "owner";
                type: "publicKey";
            }, {
                name: "creator";
                type: "publicKey";
            }, {
                name: "authority";
                type: "publicKey";
            }, {
                name: "authoritySeed";
                type: "publicKey";
            }, {
                name: "authorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "locked";
                type: "bool";
            }, {
                name: "name";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "gemBoxCount";
                type: "u64";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "rarityPoints";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "whitelistProof";
        type: {
            kind: "struct";
            fields: [{
                name: "whitelistType";
                type: "u8";
            }, {
                name: "whitelistedAddress";
                type: "publicKey";
            }, {
                name: "bank";
                type: "publicKey";
            }];
        };
    }, anchor.IdlTypes<GemBank>>>;
    fetchAllBankPDAs(manager?: PublicKey): Promise<anchor.ProgramAccount<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "bank";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "bankManager";
                type: "publicKey";
            }, {
                name: "flags";
                type: "u32";
            }, {
                name: "whitelistedCreators";
                type: "u32";
            }, {
                name: "whitelistedMints";
                type: "u32";
            }, {
                name: "vaultCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "gemDepositReceipt";
        type: {
            kind: "struct";
            fields: [{
                name: "vault";
                type: "publicKey";
            }, {
                name: "gemBoxAddress";
                type: "publicKey";
            }, {
                name: "gemMint";
                type: "publicKey";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "rarity";
        type: {
            kind: "struct";
            fields: [{
                name: "points";
                type: "u16";
            }];
        };
    } | {
        name: "vault";
        type: {
            kind: "struct";
            fields: [{
                name: "bank";
                type: "publicKey";
            }, {
                name: "owner";
                type: "publicKey";
            }, {
                name: "creator";
                type: "publicKey";
            }, {
                name: "authority";
                type: "publicKey";
            }, {
                name: "authoritySeed";
                type: "publicKey";
            }, {
                name: "authorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "locked";
                type: "bool";
            }, {
                name: "name";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "gemBoxCount";
                type: "u64";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "rarityPoints";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "whitelistProof";
        type: {
            kind: "struct";
            fields: [{
                name: "whitelistType";
                type: "u8";
            }, {
                name: "whitelistedAddress";
                type: "publicKey";
            }, {
                name: "bank";
                type: "publicKey";
            }];
        };
    }, anchor.IdlTypes<GemBank>>>[]>;
    fetchAllVaultPDAs(bank?: PublicKey): Promise<anchor.ProgramAccount<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "bank";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "bankManager";
                type: "publicKey";
            }, {
                name: "flags";
                type: "u32";
            }, {
                name: "whitelistedCreators";
                type: "u32";
            }, {
                name: "whitelistedMints";
                type: "u32";
            }, {
                name: "vaultCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "gemDepositReceipt";
        type: {
            kind: "struct";
            fields: [{
                name: "vault";
                type: "publicKey";
            }, {
                name: "gemBoxAddress";
                type: "publicKey";
            }, {
                name: "gemMint";
                type: "publicKey";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "rarity";
        type: {
            kind: "struct";
            fields: [{
                name: "points";
                type: "u16";
            }];
        };
    } | {
        name: "vault";
        type: {
            kind: "struct";
            fields: [{
                name: "bank";
                type: "publicKey";
            }, {
                name: "owner";
                type: "publicKey";
            }, {
                name: "creator";
                type: "publicKey";
            }, {
                name: "authority";
                type: "publicKey";
            }, {
                name: "authoritySeed";
                type: "publicKey";
            }, {
                name: "authorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "locked";
                type: "bool";
            }, {
                name: "name";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "gemBoxCount";
                type: "u64";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "rarityPoints";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "whitelistProof";
        type: {
            kind: "struct";
            fields: [{
                name: "whitelistType";
                type: "u8";
            }, {
                name: "whitelistedAddress";
                type: "publicKey";
            }, {
                name: "bank";
                type: "publicKey";
            }];
        };
    }, anchor.IdlTypes<GemBank>>>[]>;
    fetchAllGdrPDAs(vault?: PublicKey): Promise<anchor.ProgramAccount<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "bank";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "bankManager";
                type: "publicKey";
            }, {
                name: "flags";
                type: "u32";
            }, {
                name: "whitelistedCreators";
                type: "u32";
            }, {
                name: "whitelistedMints";
                type: "u32";
            }, {
                name: "vaultCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "gemDepositReceipt";
        type: {
            kind: "struct";
            fields: [{
                name: "vault";
                type: "publicKey";
            }, {
                name: "gemBoxAddress";
                type: "publicKey";
            }, {
                name: "gemMint";
                type: "publicKey";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "rarity";
        type: {
            kind: "struct";
            fields: [{
                name: "points";
                type: "u16";
            }];
        };
    } | {
        name: "vault";
        type: {
            kind: "struct";
            fields: [{
                name: "bank";
                type: "publicKey";
            }, {
                name: "owner";
                type: "publicKey";
            }, {
                name: "creator";
                type: "publicKey";
            }, {
                name: "authority";
                type: "publicKey";
            }, {
                name: "authoritySeed";
                type: "publicKey";
            }, {
                name: "authorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "locked";
                type: "bool";
            }, {
                name: "name";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "gemBoxCount";
                type: "u64";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "rarityPoints";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "whitelistProof";
        type: {
            kind: "struct";
            fields: [{
                name: "whitelistType";
                type: "u8";
            }, {
                name: "whitelistedAddress";
                type: "publicKey";
            }, {
                name: "bank";
                type: "publicKey";
            }];
        };
    }, anchor.IdlTypes<GemBank>>>[]>;
    fetchAllWhitelistProofPDAs(bank?: PublicKey): Promise<anchor.ProgramAccount<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "bank";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "bankManager";
                type: "publicKey";
            }, {
                name: "flags";
                type: "u32";
            }, {
                name: "whitelistedCreators";
                type: "u32";
            }, {
                name: "whitelistedMints";
                type: "u32";
            }, {
                name: "vaultCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "gemDepositReceipt";
        type: {
            kind: "struct";
            fields: [{
                name: "vault";
                type: "publicKey";
            }, {
                name: "gemBoxAddress";
                type: "publicKey";
            }, {
                name: "gemMint";
                type: "publicKey";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "rarity";
        type: {
            kind: "struct";
            fields: [{
                name: "points";
                type: "u16";
            }];
        };
    } | {
        name: "vault";
        type: {
            kind: "struct";
            fields: [{
                name: "bank";
                type: "publicKey";
            }, {
                name: "owner";
                type: "publicKey";
            }, {
                name: "creator";
                type: "publicKey";
            }, {
                name: "authority";
                type: "publicKey";
            }, {
                name: "authoritySeed";
                type: "publicKey";
            }, {
                name: "authorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "locked";
                type: "bool";
            }, {
                name: "name";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "gemBoxCount";
                type: "u64";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "rarityPoints";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "whitelistProof";
        type: {
            kind: "struct";
            fields: [{
                name: "whitelistType";
                type: "u8";
            }, {
                name: "whitelistedAddress";
                type: "publicKey";
            }, {
                name: "bank";
                type: "publicKey";
            }];
        };
    }, anchor.IdlTypes<GemBank>>>[]>;
    fetchAllRarityPDAs(): Promise<anchor.ProgramAccount<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<{
        name: "bank";
        type: {
            kind: "struct";
            fields: [{
                name: "version";
                type: "u16";
            }, {
                name: "bankManager";
                type: "publicKey";
            }, {
                name: "flags";
                type: "u32";
            }, {
                name: "whitelistedCreators";
                type: "u32";
            }, {
                name: "whitelistedMints";
                type: "u32";
            }, {
                name: "vaultCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "gemDepositReceipt";
        type: {
            kind: "struct";
            fields: [{
                name: "vault";
                type: "publicKey";
            }, {
                name: "gemBoxAddress";
                type: "publicKey";
            }, {
                name: "gemMint";
                type: "publicKey";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 32];
                };
            }];
        };
    } | {
        name: "rarity";
        type: {
            kind: "struct";
            fields: [{
                name: "points";
                type: "u16";
            }];
        };
    } | {
        name: "vault";
        type: {
            kind: "struct";
            fields: [{
                name: "bank";
                type: "publicKey";
            }, {
                name: "owner";
                type: "publicKey";
            }, {
                name: "creator";
                type: "publicKey";
            }, {
                name: "authority";
                type: "publicKey";
            }, {
                name: "authoritySeed";
                type: "publicKey";
            }, {
                name: "authorityBumpSeed";
                type: {
                    array: ["u8", 1];
                };
            }, {
                name: "locked";
                type: "bool";
            }, {
                name: "name";
                type: {
                    array: ["u8", 32];
                };
            }, {
                name: "gemBoxCount";
                type: "u64";
            }, {
                name: "gemCount";
                type: "u64";
            }, {
                name: "rarityPoints";
                type: "u64";
            }, {
                name: "reserved";
                type: {
                    array: ["u8", 64];
                };
            }];
        };
    } | {
        name: "whitelistProof";
        type: {
            kind: "struct";
            fields: [{
                name: "whitelistType";
                type: "u8";
            }, {
                name: "whitelistedAddress";
                type: "publicKey";
            }, {
                name: "bank";
                type: "publicKey";
            }];
        };
    }, anchor.IdlTypes<GemBank>>>[]>;
    initBank(bank: Keypair, bankManager: PublicKey | Keypair, payer: PublicKey | Keypair): Promise<{
        txSig: string;
    }>;
    updateBankManager(bank: PublicKey, bankManager: PublicKey | Keypair, newManager: PublicKey): Promise<{
        txSig: string;
    }>;
    initVault(bank: PublicKey, creator: PublicKey | Keypair, payer: PublicKey | Keypair, owner: PublicKey, name: string): Promise<{
        vault: anchor.web3.PublicKey;
        vaultBump: number;
        vaultAuth: anchor.web3.PublicKey;
        vaultAuthBump: number;
        txSig: string;
    }>;
    updateVaultOwner(bank: PublicKey, vault: PublicKey, existingOwner: Keypair | PublicKey, newOwner: PublicKey): Promise<{
        txSig: string;
    }>;
    setVaultLock(bank: PublicKey, vault: PublicKey, bankManager: PublicKey | Keypair, vaultLocked: boolean): Promise<{
        txSig: string;
    }>;
    setBankFlags(bank: PublicKey, bankManager: PublicKey | Keypair, flags: BankFlags): Promise<{
        txSig: string;
    }>;
    depositGem(bank: PublicKey, vault: PublicKey, vaultOwner: PublicKey | Keypair, gemAmount: BN, gemMint: PublicKey, gemSource: PublicKey, mintProof?: PublicKey, metadata?: PublicKey, creatorProof?: PublicKey): Promise<{
        vaultAuth: anchor.web3.PublicKey;
        vaultAuthBump: number;
        gemBox: anchor.web3.PublicKey;
        gemBoxBump: number;
        GDR: anchor.web3.PublicKey;
        GDRBump: number;
        gemRarity: anchor.web3.PublicKey;
        gemRarityBump: number;
        txSig: string;
    }>;
    withdrawGem(bank: PublicKey, vault: PublicKey, vaultOwner: PublicKey | Keypair, gemAmount: BN, gemMint: PublicKey, receiver: PublicKey): Promise<{
        gemBox: anchor.web3.PublicKey;
        gemBoxBump: number;
        GDR: anchor.web3.PublicKey;
        GDRBump: number;
        gemRarity: anchor.web3.PublicKey;
        gemRarityBump: number;
        vaultAuth: anchor.web3.PublicKey;
        vaultAuthBump: number;
        gemDestination: anchor.web3.PublicKey;
        txSig: string;
    }>;
    addToWhitelist(bank: PublicKey, bankManager: PublicKey | Keypair, addressToWhitelist: PublicKey, whitelistType: WhitelistType, payer?: PublicKey): Promise<{
        whitelistProof: anchor.web3.PublicKey;
        whitelistBump: number;
        txSig: string;
    }>;
    removeFromWhitelist(bank: PublicKey, bankManager: PublicKey | Keypair, addressToRemove: PublicKey, fundsReceiver?: PublicKey): Promise<{
        whitelistProof: anchor.web3.PublicKey;
        whitelistBump: number;
        txSig: string;
    }>;
}
