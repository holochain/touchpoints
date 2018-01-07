'use strict';

function nfcTagCreate(tagId){
    var key = commit("nfcTag",tagId);         // Commits a new nfcTag to my source chain
    return key;
}

function nfcTagRead(params){
    var obj = get(params.key);
    return JSON.parse(obj);
}

function nfcTagDelete(hash){
    remove(hash, "");
    return true;
}

function bumpLinkCreate(nfcTag) {
    var me = getMe();
    // what if two people bump a tag during the same second?
    var bumpHash = commit("bump", {
      nfcTag: nfcTag,
      stamp: Date.now().toString() // 1110101822
    });
    var tagHash = makeHash("nfcTag", { id: nfcTag })
    var linkHash = commit("bumpLink",
                  {Links:[
                      {Base:tagHash,Tag:"bump",Link:bumpHash},
                      {Base:me,Tag:"bump",Link:bumpHash}
                  ]});
    return linkHash;
}

function getMe() {return App.Key.Hash;}

function showAgentHistory(params) {
  var links = getLinks(params.agentId, "bump", {Load:true})
  return links;
}

function showTagHistory(params) {
  var tagHash = makeHash("nfcTag", { id: params.tagId });
  var links = getLinks(tagHash, "bump", {Load:true});
  return links;
}

// -----------------------------------------------------------------
//  This stub Zome code file was auto-generated by hc-scaffold
// -----------------------------------------------------------------

/**
 * Called only when your source chain is generated
 * @return {boolean} success
 */
function genesis () {
  // any genesis code here
  return true;
}

// -----------------------------------------------------------------
//  validation functions for every DHT entry change
// -----------------------------------------------------------------

/**
 * Called to validate any changes to the DHT
 * @param {string} entryName - the name of entry being modified
 * @param {*} entry - the entry data to be set
 * @param {?} header - ?
 * @param {?} pkg - ?
 * @param {?} sources - ?
 * @return {boolean} is valid?
 */
function validateCommit (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "nfcTag":
      // validation code here
      return true;
    case "bump":
      // validation code here
      return true;
    case "bumpLink":
      // validation code here
      return true;
    default:
      // invalid entry name!!
      return false;
  }
}

/**
 * Called to validate any changes to the DHT
 * @param {string} entryName - the name of entry being modified
 * @param {*} entry - the entry data to be set
 * @param {?} header - ?
 * @param {?} pkg - ?
 * @param {?} sources - ?
 * @return {boolean} is valid?
 */
function validatePut (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "nfcTag":
      // validation code here
      return true;
    case "bump":
      // validation code here
      return true;
    default:
      // invalid entry name!!
      return false;
  }
}

/**
 * Called to validate any changes to the DHT
 * @param {string} entryName - the name of entry being modified
 * @param {*} entry - the entry data to be set
 * @param {?} header - ?
 * @param {*} replaces - the old entry data
 * @param {?} pkg - ?
 * @param {?} sources - ?
 * @return {boolean} is valid?
 */
function validateMod (entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case "nfcTag":
      // validation code here
      return false;
    case "bump":
      // validation code here
      return false;
    case "typeLink":
      // validation code here
      return false;
    default:
      // invalid entry name!!
      return false;
  }
}

/**
 * Called to validate any changes to the DHT
 * @param {string} entryName - the name of entry being modified
 * @param {string} hash - the hash of the entry to remove
 * @param {?} pkg - ?
 * @param {?} sources - ?
 * @return {boolean} is valid?
 */
function validateDel (entryName, hash, pkg, sources) {
  switch (entryName) {
    case "nfcTag":
      // validation code here
      return true;
    case "interfaceLink":
      // validation code here
      return false;
    case "typeLink":
      // validation code here
      return false;
    default:
      // invalid entry name!!
      return false;
  }
}

/**
 * Called to validate any changes to the DHT
 * @param {?} pkg - ?
 * @param {?} sources - ?
 * @return {boolean} is valid?
 */
function validateLink (linkEntryType, baseHash, links, pkg, sources) {
  switch (linkEntryType) {
    case "nfcTag":
      // validation code here
      return false;
    case "bumpLink":
      // validation code here
      return true;
    default:
      // invalid entry name!!
      return false;
  }
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validatePutPkg (entryName) {
  return null;
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validateModPkg (entryName) {
  return null;
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validateDelPkg (entryName) {
  return null;
}

function validateLinkPkg (entryName) {
  return null;
}
