import uuid from 'uuid';

class Trip {
    constructor(object) {
        this.jid = uuid();
        this.id = object.id;
        this.nickname = object.nickname;
        this.departureDate = object.departureDate;
        this.flightNumber = object.flightNumber;
        this.address = object.address;
        this.city = object.city;
        this.state = object.state;
        this.zip = object.zip;
        this.drivingData = null;
        this.flightData = null
    };

    get drivingTimeFormatted() {
        return new Date('1970-01-01 ' + this.drivingData.route.formattedTime + ' GMT+0000')
    };

    get drivingTime() {
        return this.drivingData.route.formattedTime
    };

    get flightTime() {
        return new Date(this.flightData[0].departure.scheduledTimeLocal.split('-').slice(0, 3).join('-'));
    };

    get flightTimeFormatted() {
        return `${this.flightTime.getHours()}:${this.flightTime.getMinutes()} at ${this.flightTime.getMonth() + 1}-${this.flightTime.getDate()}-${this.flightTime.getFullYear()}`
    };

    get departureTime() {
        let dTime =  new Date(this.flightTime.getTime() - this.drivingTimeFormatted.getTime() - 7200000);
        return `${dTime.getHours()}:${dTime.getMinutes()}`
    };

    get airportName() {
        return this.flightData[0].departure.airport.name
    };

    get mapURL() {
        return `https://open.mapquestapi.com/staticmap/v5/map?start=${this.drivingData.route.locations[0].latLng.lat},${this.drivingData.route.locations[0].latLng.lng}&end=${this.drivingData.route.locations[1].latLng.lat},${this.drivingData.route.locations[1].latLng.lng}&size=300,200@2x&key=GQ9IAjrMjq3TgirjdQGfC8jxYBQMKGiB`
    };

    get fullAddress() {
        return `${this.address}, ${this.city}, ${this.state} ${this.zip}`
    };

    get uploadPrep() {
        if (!!this.id) {
            return {
                uploadData: {
                    method: "PUT",
                    path: `trips/${this.id}`
                },
                prepedTrip: {
                    jid: this.jid,
                    id: this.id,
                    nickname: this.nickname,
                    departureDate: this.departureDate,
                    flightNumber: this.flightNumber,
                    address: this.address,
                    city: this.city,
                    state: this.state,
                    zip: this.zip
                }
            }
        } else {
            return {
                uploadData: {
                    method: "POST",
                    path: "trips"
                },
                prepedTrip: {
                    jid: this.jid,
                    nickname: this.nickname,
                    departureDate: this.departureDate,
                    flightNumber: this.flightNumber,
                    address: this.address,
                    city: this.city,
                    state: this.state,
                    zip: this.zip
                }
            }
        }
    }

};

export default Trip;