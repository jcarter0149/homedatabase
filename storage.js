const HomeInventoryDatabase = {}

    HomeInventoryDatabase.furniture = [],
    HomeInventoryDatabase.crafts = [],
    HomeInventoryDatabase.electronics = []


const couch = {
    name:"couch",
    location: "livingroom",
    description: "first couch i ever bought. very comfortable"
}


const coffeeTable ={ 
    name: "coffee table",
    location: "livingroom",
    description: "good for what it does. remember that time you got drunk and ruined your mac and this coffee table...good times"
}

const firePlace = {
    name: "fireplace",
    location: "livingroom",
    description: "tv stand with electric firplace. Fireplace suffered a powersurge and no longer works :("
}

const bed = {
    name: "bed",
    location:"bedroom",
    description:"this is where you sleep"
}

const lamp = {
    name:"lamp",
    location:"bedroom",
    description:"only thing to light up my world"
}

const endTable = {
    name:"end table",
    location:"bedroom",
    description:"holds my wirelesss charger and my lamp. does its job well"
}

const livingRoomPainting = {
    name:"living room painting",
    location:"livingroom",
    description:"man and woman meeting at the bar"
}

const xbox = {
    name: "xbox",
    location: "livingroom",
    description: "passes the time"
}

const tv = {
    name:"tv",
    location:"livingroom",
    description:"lets me see other worlds"
}

const router = {
    name:"router",
    location:"livingroom",
    description:"lets me look at the google"
}

HomeInventoryDatabase.crafts.push(livingRoomPainting)
HomeInventoryDatabase.furniture.push(endTable, lamp, bed, firePlace, coffeeTable, couch)
HomeInventoryDatabase.electronics.push(xbox, tv, router)

const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
saveDatabase(HomeInventoryDatabase, "HomeInventory")

