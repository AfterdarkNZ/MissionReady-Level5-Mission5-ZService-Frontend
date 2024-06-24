import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import styles from "./StationMap.module.css";
import { useState } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

export default function StationMap() {
  const [position, setPosition] = useState({ lat: -36.89, lng: 174.7645 });
  const [fuelType, setFuelType] = useState("91");

  // Hard-coded data for now, should be fetched from API
  const locations = [
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b861f",
      },
      key: "albany",
      name: "Z - Albany Service Station",
      location: {
        lat: -36.7279,
        lng: 174.707,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.2,
        95: 2.3,
        diesel: 1.5,
      },
      evCharging: {
        fast: true,
        ultraFast: false,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8621",
      },
      key: "botanyDowns",
      name: "Z - Botany Downs Service Station",
      location: {
        lat: -36.9309,
        lng: 174.9125,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: false,
      },
      fuelPrices: {
        91: 2.18,
        95: 2.28,
        diesel: null,
      },
      evCharging: {
        fast: true,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: false,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "07:00",
        close: "21:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8625",
      },
      key: "henderson",
      name: "Z - Henderson Service Station",
      location: {
        lat: -36.879,
        lng: 174.6323,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.2,
        95: 2.3,
        diesel: 1.5,
      },
      evCharging: {
        fast: false,
        ultraFast: true,
      },
      facilities: {
        atm: false,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: false,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8627",
      },
      key: "manukau",
      name: "Z - Manukau Service Station",
      location: {
        lat: -36.9928,
        lng: 174.879,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: false,
      },
      fuelPrices: {
        91: 2.19,
        95: 2.29,
        diesel: null,
      },
      evCharging: {
        fast: false,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "23:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8628",
      },
      key: "newmarket",
      name: "Z - Newmarket Service Station",
      location: {
        lat: -36.8667,
        lng: 174.7772,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.21,
        95: 2.31,
        diesel: 1.51,
      },
      evCharging: {
        fast: true,
        ultraFast: false,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: true,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "23:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8629",
      },
      key: "northcote",
      name: "Z - Northcote Service Station",
      location: {
        lat: -36.8031,
        lng: 174.748,
      },
      fuelsAvailable: {
        91: true,
        95: false,
        diesel: true,
      },
      fuelPrices: {
        91: 2.18,
        95: null,
        diesel: 1.48,
      },
      evCharging: {
        fast: false,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: false,
        toilet: true,
        payAtPump: false,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b862a",
      },
      key: "onehunga",
      name: "Z - Onehunga Service Station",
      location: {
        lat: -36.9243,
        lng: 174.7847,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: false,
      },
      fuelPrices: {
        91: 2.2,
        95: 2.3,
        diesel: null,
      },
      evCharging: {
        fast: true,
        ultraFast: false,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: false,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "05:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b862b",
      },
      key: "orem",
      name: "Z - Orem Service Station",
      location: {
        lat: -36.985,
        lng: 174.869,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.19,
        95: 2.29,
        diesel: 1.49,
      },
      evCharging: {
        fast: false,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b862d",
      },
      key: "pakuranga",
      name: "Z - Pakuranga Service Station",
      location: {
        lat: -36.909,
        lng: 174.854,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: false,
      },
      fuelPrices: {
        91: 2.18,
        95: 2.28,
        diesel: null,
      },
      evCharging: {
        fast: true,
        ultraFast: false,
      },
      facilities: {
        atm: false,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "07:00",
        close: "21:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b862e",
      },
      key: "panmure",
      name: "Z - Panmure Service Station",
      location: {
        lat: -36.8887,
        lng: 174.8484,
      },
      fuelsAvailable: {
        91: true,
        95: false,
        diesel: true,
      },
      fuelPrices: {
        91: 2.19,
        95: null,
        diesel: 1.49,
      },
      evCharging: {
        fast: true,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: true,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "23:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b862f",
      },
      key: "papakura",
      name: "Z - Papakura Service Station",
      location: {
        lat: -37.0667,
        lng: 174.9433,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.21,
        95: 2.31,
        diesel: 1.51,
      },
      evCharging: {
        fast: false,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: false,
        toilet: true,
        payAtPump: false,
        trailerHire: true,
        carWash: false,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8631",
      },
      key: "ponsonby",
      name: "Z - Ponsonby Service Station",
      location: {
        lat: -36.857,
        lng: 174.7467,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.2,
        95: 2.3,
        diesel: 1.5,
      },
      evCharging: {
        fast: true,
        ultraFast: true,
      },
      facilities: {
        atm: false,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8632",
      },
      key: "remuera",
      name: "Z - Remuera Service Station",
      location: {
        lat: -36.8712,
        lng: 174.7985,
      },
      fuelsAvailable: {
        91: true,
        95: false,
        diesel: true,
      },
      fuelPrices: {
        91: 2.18,
        95: null,
        diesel: 1.48,
      },
      evCharging: {
        fast: true,
        ultraFast: false,
      },
      facilities: {
        atm: true,
        wifi: false,
        toilet: true,
        payAtPump: false,
        trailerHire: true,
        carWash: false,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8633",
      },
      key: "royalOak",
      name: "Z - Royal Oak Service Station",
      location: {
        lat: -36.9072,
        lng: 174.7838,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.19,
        95: 2.29,
        diesel: 1.49,
      },
      evCharging: {
        fast: false,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8634",
      },
      key: "stJohns",
      name: "Z - St Johns Service Station",
      location: {
        lat: -36.8792,
        lng: 174.8488,
      },
      fuelsAvailable: {
        91: true,
        95: false,
        diesel: true,
      },
      fuelPrices: {
        91: 2.18,
        95: null,
        diesel: 1.48,
      },
      evCharging: {
        fast: true,
        ultraFast: false,
      },
      facilities: {
        atm: true,
        wifi: false,
        toilet: true,
        payAtPump: false,
        trailerHire: true,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8635",
      },
      key: "takapuna",
      name: "Z - Takapuna Service Station",
      location: {
        lat: -36.787,
        lng: 174.768,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.21,
        95: 2.31,
        diesel: 1.51,
      },
      evCharging: {
        fast: false,
        ultraFast: true,
      },
      facilities: {
        atm: false,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8638",
      },
      key: "whenuapai",
      name: "Z - Whenuapai Service Station",
      location: {
        lat: -36.8097,
        lng: 174.63,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.19,
        95: 2.29,
        diesel: 1.49,
      },
      evCharging: {
        fast: true,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8639",
      },
      key: "avondale",
      name: "Z - Avondale Service Station",
      location: {
        lat: -36.8794,
        lng: 174.6987,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.18,
        95: 2.28,
        diesel: 1.48,
      },
      evCharging: {
        fast: true,
        ultraFast: false,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: false,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "07:00",
        close: "21:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b863a",
      },
      key: "birkdale",
      name: "Z - Birkdale Service Station",
      location: {
        lat: -36.7977,
        lng: 174.704,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.2,
        95: 2.3,
        diesel: 1.5,
      },
      evCharging: {
        fast: true,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: false,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: false,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b863b",
      },
      key: "blokhouseBay",
      name: "Z - Blockhouse Bay Service Station",
      location: {
        lat: -36.9191,
        lng: 174.7143,
      },
      fuelsAvailable: {
        91: true,
        95: false,
        diesel: true,
      },
      fuelPrices: {
        91: 2.19,
        95: null,
        diesel: 1.49,
      },
      evCharging: {
        fast: true,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: false,
        trailerHire: true,
        carWash: false,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b863c",
      },
      key: "coniferGrove",
      name: "Z - Conifer Grove Service Station",
      location: {
        lat: -37.0572,
        lng: 174.9214,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.21,
        95: 2.31,
        diesel: 1.51,
      },
      evCharging: {
        fast: false,
        ultraFast: true,
      },
      facilities: {
        atm: false,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: true,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "23:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b863d",
      },
      key: "devonport",
      name: "Z - Devonport Service Station",
      location: {
        lat: -36.831,
        lng: 174.801,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: false,
      },
      fuelPrices: {
        91: 2.18,
        95: 2.28,
        diesel: null,
      },
      evCharging: {
        fast: true,
        ultraFast: false,
      },
      facilities: {
        atm: true,
        wifi: false,
        toilet: true,
        payAtPump: false,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "21:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b863e",
      },
      key: "epsom",
      name: "Z - Epsom Service Station",
      location: {
        lat: -36.8917,
        lng: 174.7838,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.2,
        95: 2.3,
        diesel: 1.5,
      },
      evCharging: {
        fast: true,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: false,
        trailerHire: true,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b863f",
      },
      key: "glendowie",
      name: "Z - Glendowie Service Station",
      location: {
        lat: -36.8647,
        lng: 174.8574,
      },
      fuelsAvailable: {
        91: true,
        95: false,
        diesel: true,
      },
      fuelPrices: {
        91: 2.18,
        95: null,
        diesel: 1.48,
      },
      evCharging: {
        fast: true,
        ultraFast: false,
      },
      facilities: {
        atm: false,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8640",
      },
      key: "glenfield",
      name: "Z - Glenfield Service Station",
      location: {
        lat: -36.7825,
        lng: 174.7281,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.21,
        95: 2.31,
        diesel: 1.51,
      },
      evCharging: {
        fast: false,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: true,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8641",
      },
      key: "greenlane",
      name: "Z - Greenlane Service Station",
      location: {
        lat: -36.8921,
        lng: 174.797,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.19,
        95: 2.29,
        diesel: 1.49,
      },
      evCharging: {
        fast: true,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8642",
      },
      key: "herneBay",
      name: "Z - Herne Bay Service Station",
      location: {
        lat: -36.849,
        lng: 174.731,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.2,
        95: 2.3,
        diesel: 1.5,
      },
      evCharging: {
        fast: true,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: true,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8643",
      },
      key: "howick",
      name: "Z - Howick Service Station",
      location: {
        lat: -36.8988,
        lng: 174.9242,
      },
      fuelsAvailable: {
        91: true,
        95: false,
        diesel: true,
      },
      fuelPrices: {
        91: 2.18,
        95: null,
        diesel: 1.48,
      },
      evCharging: {
        fast: true,
        ultraFast: false,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: false,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "07:00",
        close: "21:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8644",
      },
      key: "mtAlbert",
      name: "Z - Mt Albert Service Station",
      location: {
        lat: -36.8983,
        lng: 174.7116,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.21,
        95: 2.31,
        diesel: 1.51,
      },
      evCharging: {
        fast: false,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: false,
        toilet: true,
        payAtPump: true,
        trailerHire: true,
        carWash: false,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8645",
      },
      key: "mtRoskill",
      name: "Z - Mt Roskill Service Station",
      location: {
        lat: -36.901,
        lng: 174.7385,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.19,
        95: 2.29,
        diesel: 1.49,
      },
      evCharging: {
        fast: true,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8646",
      },
      key: "mtWellington",
      name: "Z - Mt Wellington Service Station",
      location: {
        lat: -36.9155,
        lng: 174.831,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: false,
      },
      fuelPrices: {
        91: 2.18,
        95: 2.28,
        diesel: null,
      },
      evCharging: {
        fast: true,
        ultraFast: false,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: false,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "21:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8647",
      },
      key: "ormiston",
      name: "Z - Ormiston Service Station",
      location: {
        lat: -36.9682,
        lng: 174.8881,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.21,
        95: 2.31,
        diesel: 1.51,
      },
      evCharging: {
        fast: false,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8648",
      },
      key: "otahuhu",
      name: "Z - Otahuhu Service Station",
      location: {
        lat: -36.9525,
        lng: 174.8436,
      },
      fuelsAvailable: {
        91: true,
        95: false,
        diesel: true,
      },
      fuelPrices: {
        91: 2.18,
        95: null,
        diesel: 1.48,
      },
      evCharging: {
        fast: true,
        ultraFast: false,
      },
      facilities: {
        atm: false,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: true,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "21:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b8649",
      },
      key: "otara",
      name: "Z - Otara Service Station",
      location: {
        lat: -36.9414,
        lng: 174.8665,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.2,
        95: 2.3,
        diesel: 1.5,
      },
      evCharging: {
        fast: true,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: false,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b864a",
      },
      key: "papatoetoe",
      name: "Z - Papatoetoe Service Station",
      location: {
        lat: -36.9798,
        lng: 174.8458,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.19,
        95: 2.29,
        diesel: 1.49,
      },
      evCharging: {
        fast: true,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b864b",
      },
      key: "pointChevalier",
      name: "Z - Point Chevalier Service Station",
      location: {
        lat: -36.8642,
        lng: 174.7177,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.21,
        95: 2.31,
        diesel: 1.51,
      },
      evCharging: {
        fast: false,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: true,
        trailerHire: true,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b864c",
      },
      key: "sandringham",
      name: "Z - Sandringham Service Station",
      location: {
        lat: -36.8931,
        lng: 174.7456,
      },
      fuelsAvailable: {
        91: true,
        95: false,
        diesel: true,
      },
      fuelPrices: {
        91: 2.18,
        95: null,
        diesel: 1.48,
      },
      evCharging: {
        fast: true,
        ultraFast: false,
      },
      facilities: {
        atm: true,
        wifi: true,
        toilet: true,
        payAtPump: false,
        trailerHire: false,
        carWash: true,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
    {
      _id: {
        $oid: "6677dcaeebb8a3840f1b864d",
      },
      key: "teAtatu",
      name: "Z - Te Atatu Service Station",
      location: {
        lat: -36.8583,
        lng: 174.6512,
      },
      fuelsAvailable: {
        91: true,
        95: true,
        diesel: true,
      },
      fuelPrices: {
        91: 2.2,
        95: 2.3,
        diesel: 1.5,
      },
      evCharging: {
        fast: true,
        ultraFast: true,
      },
      facilities: {
        atm: true,
        wifi: false,
        toilet: true,
        payAtPump: true,
        trailerHire: true,
        carWash: false,
        coffee: true,
        hotFood: true,
        snacks: true,
        drinks: true,
      },
      openingHours: {
        open: "06:00",
        close: "22:00",
      },
    },
  ];

  const apiKey = import.meta.env.VITE_MAP_API_KEY;
  const mapID = import.meta.env.VITE_MAP_ID;

  return (
    <div className={styles.mapContainer}>
      <APIProvider
        apiKey={apiKey}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Map
          defaultCenter={position}
          defaultZoom={12}
          className={styles.provider}
          mapId={mapID}
          disableDefaultUI={true}
          zoomControl={true}
        >
          {locations.map((poi) => (
            <AdvancedMarker
              key={poi.key}
              position={poi.location}
              clickable={true}
              onClick={() => {
                console.log(poi.name);
                setPosition(poi.location);
              }}
            >
              <div className={styles.pinInfo}>
                <div className={styles.fuelInfo}>
                  <p className={styles.fuelType}>ZX{fuelType}</p>
                  <p className={styles.fuelCost}>
                    ${poi.fuelPrices[fuelType]} L
                  </p>
                </div>
                <img
                  src="/src/assets/images/default.svg"
                  alt="Map pin"
                  className={styles.mapPin}
                />
              </div>
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}
