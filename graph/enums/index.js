const { GraphQLEnumType } = require('graphql');

const IndustryType = new GraphQLEnumType({
    name: 'industries',
    values: {
        ACCOUNTING: { value: 'accounting' },
        BANK: { value: 'bank' },
        IT: { value: 'IT' },
        ART: { value: 'art' },
        TOURISM: { value: 'tourism' },
    },
});

const OwnerShipType = new GraphQLEnumType({
    name: 'ownerShips',
    values: {
        GOVERNMENT: { value: 'government' },
        NON_PROFIT: { value: 'non profit' },
        PRIVATE: { value: 'private' },
        PUBLIC: { value: 'public' },
    },
});

const StatusType = new GraphQLEnumType({
    name: 'status',
    values: {
        WORKING: { value: 'working' },
        NOT_WORKING: { value: 'not working' },
    },
});

const LocationType = new GraphQLEnumType({
    name: 'locations',
    values: {
        AUSTIN: { value: 'austin' },
        DENVER: { value: 'denver' },
        PALO_ALTO: { value: 'palo_alto' },
        NEW_YORK: { value: 'new_york' },
        CHICAGO: { value: 'chicago' },
        ATLANTA: { value: 'atlanta' },
        MIAMI: { value: 'miami' },
        WASHINGTON_DC: { value: 'washington_dc' },
    },
});

module.exports.IndustryType = IndustryType;
module.exports.OwnerShipType = OwnerShipType;
module.exports.StatusType = StatusType;
module.exports.LocationType = LocationType;
