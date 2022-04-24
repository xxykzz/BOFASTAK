"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GemBankClient = exports.WhitelistType = exports.BankFlags = void 0;
const anchor = __importStar(require("@project-serum/anchor"));
const anchor_1 = require("@project-serum/anchor");
const web3_js_1 = require("@solana/web3.js");
const spl_token_1 = require("@solana/spl-token");
const gem_common_1 = require("../gem-common");
const gem_common_2 = require("../gem-common");
const gem_bank_pda_1 = require("./gem-bank.pda");
var BankFlags;
(function (BankFlags) {
    BankFlags[BankFlags["FreezeVaults"] = 1] = "FreezeVaults";
})(BankFlags = exports.BankFlags || (exports.BankFlags = {}));
var WhitelistType;
(function (WhitelistType) {
    WhitelistType[WhitelistType["Creator"] = 1] = "Creator";
    WhitelistType[WhitelistType["Mint"] = 2] = "Mint";
})(WhitelistType = exports.WhitelistType || (exports.WhitelistType = {}));
class GemBankClient extends gem_common_1.AccountUtils {
    constructor(conn, 
    // @ts-ignore
    wallet, idl, programId) {
        super(conn);
        this.wallet = wallet;
        this.setProvider();
        this.setBankProgram(idl, programId);
    }
    setProvider() {
        this.provider = new anchor_1.Provider(this.conn, this.wallet, anchor_1.Provider.defaultOptions());
        anchor.setProvider(this.provider);
    }
    setBankProgram(idl, programId) {
        //instantiating program depends on the environment
        if (idl && programId) {
            //means running in prod
            this.bankProgram = new anchor.Program(idl, programId, this.provider);
        }
        else {
            //means running inside test suite
            // @ts-ignore
            this.bankProgram = anchor.workspace.GemBank;
        }
    }
    // --------------------------------------- fetch deserialized accounts
    fetchBankAcc(bank) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bankProgram.account.bank.fetch(bank);
        });
    }
    fetchVaultAcc(vault) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bankProgram.account.vault.fetch(vault);
        });
    }
    fetchGDRAcc(GDR) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bankProgram.account.gemDepositReceipt.fetch(GDR);
        });
    }
    fetchGemAcc(mint, gemAcc) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.deserializeTokenAccount(mint, gemAcc);
        });
    }
    fetchWhitelistProofAcc(proof) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bankProgram.account.whitelistProof.fetch(proof);
        });
    }
    fetchRarity(rarity) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bankProgram.account.rarity.fetch(rarity);
        });
    }
    // --------------------------------------- get all PDAs by type
    //https://project-serum.github.io/anchor/ts/classes/accountclient.html#all
    fetchAllBankPDAs(manager) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = manager
                ? [
                    {
                        memcmp: {
                            offset: 10,
                            bytes: manager.toBase58(),
                        },
                    },
                ]
                : [];
            const pdas = yield this.bankProgram.account.bank.all(filter);
            console.log(`found a total of ${pdas.length} bank PDAs`);
            return pdas;
        });
    }
    fetchAllVaultPDAs(bank) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = bank
                ? [
                    {
                        memcmp: {
                            offset: 8,
                            bytes: bank.toBase58(),
                        },
                    },
                ]
                : [];
            const pdas = yield this.bankProgram.account.vault.all(filter);
            console.log(`found a total of ${pdas.length} vault PDAs`);
            return pdas;
        });
    }
    fetchAllGdrPDAs(vault) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = vault
                ? [
                    {
                        memcmp: {
                            offset: 8,
                            bytes: vault.toBase58(),
                        },
                    },
                ]
                : [];
            const pdas = yield this.bankProgram.account.gemDepositReceipt.all(filter);
            console.log(`found a total of ${pdas.length} GDR PDAs`);
            return pdas;
        });
    }
    fetchAllWhitelistProofPDAs(bank) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = bank
                ? [
                    {
                        memcmp: {
                            offset: 41,
                            bytes: bank.toBase58(),
                        },
                    },
                ]
                : [];
            const pdas = yield this.bankProgram.account.whitelistProof.all(filter);
            console.log(`found a total of ${pdas.length} whitelist proofs`);
            return pdas;
        });
    }
    fetchAllRarityPDAs() {
        return __awaiter(this, void 0, void 0, function* () {
            //todo need to add client-side (not stored in PDA) filtering based on finding PDAs for given farm and mint
            const pdas = yield this.bankProgram.account.rarity.all();
            console.log(`found a total of ${pdas.length} rarity PDAs`);
            return pdas;
        });
    }
    // --------------------------------------- execute ixs
    initBank(bank, bankManager, payer) {
        return __awaiter(this, void 0, void 0, function* () {
            const signers = [bank];
            if ((0, gem_common_2.isKp)(bankManager))
                signers.push(bankManager);
            console.log('starting bank at', bank.publicKey.toBase58());
            const txSig = yield this.bankProgram.rpc.initBank({
                accounts: {
                    bank: bank.publicKey,
                    bankManager: (0, gem_common_2.isKp)(bankManager)
                        ? bankManager.publicKey
                        : bankManager,
                    payer: (0, gem_common_2.isKp)(payer) ? payer.publicKey : payer,
                    systemProgram: web3_js_1.SystemProgram.programId,
                },
                signers,
            });
            return { txSig };
        });
    }
    updateBankManager(bank, bankManager, newManager) {
        return __awaiter(this, void 0, void 0, function* () {
            const signers = [];
            if ((0, gem_common_2.isKp)(bankManager))
                signers.push(bankManager);
            console.log('updating bank manager to', newManager.toBase58());
            const txSig = yield this.bankProgram.rpc.updateBankManager(newManager, {
                accounts: {
                    bank,
                    bankManager: (0, gem_common_2.isKp)(bankManager)
                        ? bankManager.publicKey
                        : bankManager,
                },
                signers,
            });
            return { txSig };
        });
    }
    initVault(bank, creator, payer, owner, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const creatorPk = (0, gem_common_2.isKp)(creator)
                ? creator.publicKey
                : creator;
            const [vault, vaultBump] = yield (0, gem_bank_pda_1.findVaultPDA)(bank, creatorPk);
            const [vaultAuth, vaultAuthBump] = yield (0, gem_bank_pda_1.findVaultAuthorityPDA)(vault); //nice-to-have
            const signers = [];
            if ((0, gem_common_2.isKp)(creator))
                signers.push(creator);
            if ((0, gem_common_2.isKp)(payer))
                signers.push(payer);
            console.log('creating vault at', vault.toBase58());
            const txSig = yield this.bankProgram.rpc.initVault(owner, name, {
                accounts: {
                    bank,
                    vault,
                    creator: creatorPk,
                    payer: (0, gem_common_2.isKp)(payer) ? payer.publicKey : payer,
                    systemProgram: web3_js_1.SystemProgram.programId,
                },
                signers,
            });
            return { vault, vaultBump, vaultAuth, vaultAuthBump, txSig };
        });
    }
    updateVaultOwner(bank, vault, existingOwner, newOwner) {
        return __awaiter(this, void 0, void 0, function* () {
            const signers = [];
            if ((0, gem_common_2.isKp)(existingOwner))
                signers.push(existingOwner);
            console.log('updating vault owner to', newOwner.toBase58());
            const txSig = yield this.bankProgram.rpc.updateVaultOwner(newOwner, {
                accounts: {
                    bank,
                    vault,
                    owner: (0, gem_common_2.isKp)(existingOwner)
                        ? existingOwner.publicKey
                        : existingOwner,
                },
                signers,
            });
            return { txSig };
        });
    }
    setVaultLock(bank, vault, bankManager, vaultLocked) {
        return __awaiter(this, void 0, void 0, function* () {
            const signers = [];
            if ((0, gem_common_2.isKp)(bankManager))
                signers.push(bankManager);
            console.log('setting vault lock to', vaultLocked);
            const txSig = yield this.bankProgram.rpc.setVaultLock(vaultLocked, {
                accounts: {
                    bank,
                    vault,
                    bankManager: (0, gem_common_2.isKp)(bankManager)
                        ? bankManager.publicKey
                        : bankManager,
                },
                signers,
            });
            return { txSig };
        });
    }
    setBankFlags(bank, bankManager, flags) {
        return __awaiter(this, void 0, void 0, function* () {
            const signers = [];
            if ((0, gem_common_2.isKp)(bankManager))
                signers.push(bankManager);
            console.log('setting bank flags to', flags);
            const txSig = yield this.bankProgram.rpc.setBankFlags(flags, {
                accounts: {
                    bank,
                    bankManager: bankManager
                        ? bankManager.publicKey
                        : bankManager,
                },
                signers,
            });
            return { txSig };
        });
    }
    depositGem(bank, vault, vaultOwner, gemAmount, gemMint, gemSource, mintProof, metadata, creatorProof) {
        return __awaiter(this, void 0, void 0, function* () {
            const [gemBox, gemBoxBump] = yield (0, gem_bank_pda_1.findGemBoxPDA)(vault, gemMint);
            const [GDR, GDRBump] = yield (0, gem_bank_pda_1.findGdrPDA)(vault, gemMint);
            const [vaultAuth, vaultAuthBump] = yield (0, gem_bank_pda_1.findVaultAuthorityPDA)(vault);
            const [gemRarity, gemRarityBump] = yield (0, gem_bank_pda_1.findRarityPDA)(bank, gemMint);
            const remainingAccounts = [];
            if (mintProof)
                remainingAccounts.push({
                    pubkey: mintProof,
                    isWritable: false,
                    isSigner: false,
                });
            if (metadata)
                remainingAccounts.push({
                    pubkey: metadata,
                    isWritable: false,
                    isSigner: false,
                });
            if (creatorProof)
                remainingAccounts.push({
                    pubkey: creatorProof,
                    isWritable: false,
                    isSigner: false,
                });
            const signers = [];
            if ((0, gem_common_2.isKp)(vaultOwner))
                signers.push(vaultOwner);
            console.log(`depositing ${gemAmount} gems into ${gemBox.toBase58()}, GDR ${GDR.toBase58()}`);
            const txSig = yield this.bankProgram.rpc.depositGem(vaultAuthBump, gemRarityBump, gemAmount, {
                accounts: {
                    bank,
                    vault,
                    owner: (0, gem_common_2.isKp)(vaultOwner)
                        ? vaultOwner.publicKey
                        : vaultOwner,
                    authority: vaultAuth,
                    gemBox,
                    gemDepositReceipt: GDR,
                    gemSource,
                    gemMint,
                    gemRarity,
                    tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                    systemProgram: web3_js_1.SystemProgram.programId,
                    rent: anchor.web3.SYSVAR_RENT_PUBKEY,
                },
                remainingAccounts,
                signers,
            });
            return {
                vaultAuth,
                vaultAuthBump,
                gemBox,
                gemBoxBump,
                GDR,
                GDRBump,
                gemRarity,
                gemRarityBump,
                txSig,
            };
        });
    }
    withdrawGem(bank, vault, vaultOwner, gemAmount, gemMint, receiver) {
        return __awaiter(this, void 0, void 0, function* () {
            const [gemBox, gemBoxBump] = yield (0, gem_bank_pda_1.findGemBoxPDA)(vault, gemMint);
            const [GDR, GDRBump] = yield (0, gem_bank_pda_1.findGdrPDA)(vault, gemMint);
            const [vaultAuth, vaultAuthBump] = yield (0, gem_bank_pda_1.findVaultAuthorityPDA)(vault);
            const [gemRarity, gemRarityBump] = yield (0, gem_bank_pda_1.findRarityPDA)(bank, gemMint);
            const gemDestination = yield this.findATA(gemMint, receiver);
            const signers = [];
            if ((0, gem_common_2.isKp)(vaultOwner))
                signers.push(vaultOwner);
            console.log(`withdrawing ${gemAmount} gems from ${gemBox.toBase58()}, GDR ${GDR.toBase58()}`);
            const txSig = yield this.bankProgram.rpc.withdrawGem(vaultAuthBump, gemBoxBump, GDRBump, gemRarityBump, gemAmount, {
                accounts: {
                    bank,
                    vault,
                    owner: (0, gem_common_2.isKp)(vaultOwner)
                        ? vaultOwner.publicKey
                        : vaultOwner,
                    authority: vaultAuth,
                    gemBox,
                    gemDepositReceipt: GDR,
                    gemDestination,
                    gemMint,
                    gemRarity,
                    receiver,
                    tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                    associatedTokenProgram: spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID,
                    systemProgram: web3_js_1.SystemProgram.programId,
                    rent: anchor.web3.SYSVAR_RENT_PUBKEY,
                },
                signers,
            });
            return {
                gemBox,
                gemBoxBump,
                GDR,
                GDRBump,
                gemRarity,
                gemRarityBump,
                vaultAuth,
                vaultAuthBump,
                gemDestination,
                txSig,
            };
        });
    }
    addToWhitelist(bank, bankManager, addressToWhitelist, whitelistType, payer) {
        return __awaiter(this, void 0, void 0, function* () {
            const managerPk = (0, gem_common_2.isKp)(bankManager)
                ? bankManager.publicKey
                : bankManager;
            const [whitelistProof, whitelistBump] = yield (0, gem_bank_pda_1.findWhitelistProofPDA)(bank, addressToWhitelist);
            const signers = [];
            if ((0, gem_common_2.isKp)(bankManager))
                signers.push(bankManager);
            const txSig = yield this.bankProgram.rpc.addToWhitelist(whitelistType, {
                accounts: {
                    bank,
                    bankManager: managerPk,
                    addressToWhitelist,
                    whitelistProof,
                    systemProgram: web3_js_1.SystemProgram.programId,
                    payer: payer !== null && payer !== void 0 ? payer : managerPk,
                },
                signers,
            });
            return { whitelistProof, whitelistBump, txSig };
        });
    }
    removeFromWhitelist(bank, bankManager, addressToRemove, fundsReceiver) {
        return __awaiter(this, void 0, void 0, function* () {
            const [whitelistProof, whitelistBump] = yield (0, gem_bank_pda_1.findWhitelistProofPDA)(bank, addressToRemove);
            const signers = [];
            if ((0, gem_common_2.isKp)(bankManager))
                signers.push(bankManager);
            const bankManagerPk = (0, gem_common_2.isKp)(bankManager)
                ? bankManager.publicKey
                : bankManager;
            const txSig = yield this.bankProgram.rpc.removeFromWhitelist(whitelistBump, {
                accounts: {
                    bank,
                    bankManager: bankManagerPk,
                    addressToRemove,
                    whitelistProof,
                    fundsReceiver: fundsReceiver !== null && fundsReceiver !== void 0 ? fundsReceiver : bankManagerPk,
                },
                signers,
            });
            return { whitelistProof, whitelistBump, txSig };
        });
    }
}
exports.GemBankClient = GemBankClient;
