export const installation = {
    id: 337,
    location: {
        latitude: 52.235619,
        longitude: 21.0112
    },
    address: {
        country: "Poland",
        city: "Warszawa",
        street: "Droga Wojewódzka 719",
        number: "27",
        displayAddress1: "Warszawa",
        displayAddress2: "Świętokrzyska"
    },
    elevation: 116.58,
    sponsor: {
        id: 259,
        name: "Sponsor",
        description: "Sponsor Description",
        logo: "",
        link: null
    }
};

export const installations = [
    {
        id: 337,
        location: {
            latitude: 52.235619,
            longitude: 21.0112
        },
        address: {
            country: "Poland",
            city: "Warszawa",
            street: "Droga Wojewódzka 719",
            number: "27",
            displayAddress1: "Warszawa",
            displayAddress2: "Świętokrzyska"
        },
        elevation: 116.58,
        sponsor: {
            id: 220,
            name: "Anonymous Fighter",
            description: "",
            logo: "",
            link: null
        }
    },
    {
        id: 332,
        location: {
            latitude: 51.235619,
            longitude: 22.0112
        },
        address: {
            country: "Poland",
            city: "Warszawa",
            street: "Aleja Jana Pawła II",
            number: "23",
            displayAddress1: "Warszawa",
            displayAddress2: "Prosta"
        },
        elevation: 112.13,
        sponsor: {
            id: 221,
            name: "Anonymous Fighter",
            description: "",
            logo: "",
            link: null
        }
    },
    {
        id: 335,
        location: {
            latitude: 51.43432,
            longitude: 20.3112
        },
        address: {
            country: "Poland",
            city: "Warszawa",
            street: "Krynicka",
            number: "32",
            displayAddress1: "Warszawa",
            displayAddress2: "Fałata"
        },
        elevation: 154.11,
        airly: true,
        sponsor: {
            id: 223,
            name: "Anonymous Fighter",
            description: "",
            logo: "",
            link: null
        }
    }
];


export const stats = {
    current: {
        fromDateTime: '2019-02-26T18:20:06.630Z',
        tillDateTime: '2019-02-26T19:20:06.630Z',
        values: [
            {
                name: 'PM1',
                value: 5.06
            },
            {
                name: 'PM25',
                value: 7.24
            },
            {
                name: 'PM10',
                value: 10.68
            },
            {
                name: 'PRESSURE',
                value: 1026.87
            },
            {
                name: 'HUMIDITY',
                value: 64.06
            },
            {
                name: 'TEMPERATURE',
                value: 5.85
            }
        ],
        indexes: [
            {
                name: 'AIRLY_CAQI',
                value: 12.07,
                level: 'VERY_LOW',
                description: 'Great air here today!',
                advice: 'Zero dust - zero worries!',
                color: '#6BC926'
            }
        ],
        standards: [
            {
                name: 'WHO',
                pollutant: 'PM25',
                limit: 25,
                percent: 28.96
            },
            {
                name: 'WHO',
                pollutant: 'PM10',
                limit: 50,
                percent: 21.37
            }
        ]
    },
    history: [
        {
            fromDateTime: '2019-02-25T19:00:00.000Z',
            tillDateTime: '2019-02-25T20:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 28.72
                },
                {
                    name: 'PM25',
                    value: 45.79
                },
                {
                    name: 'PM10',
                    value: 78.48
                },
                {
                    name: 'PRESSURE',
                    value: 1029.17
                },
                {
                    name: 'HUMIDITY',
                    value: 87.34
                },
                {
                    name: 'TEMPERATURE',
                    value: 3.17
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 67.8,
                    level: 'MEDIUM',
                    description: 'Well... It\'s been better.',
                    advice: 'Watch out - a few signs of smog today.',
                    color: '#EFBB0F'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 183.17
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 156.96
                }
            ]
        },
        {
            fromDateTime: '2019-02-25T20:00:00.000Z',
            tillDateTime: '2019-02-25T21:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 29.8
                },
                {
                    name: 'PM25',
                    value: 47.47
                },
                {
                    name: 'PM10',
                    value: 81.9
                },
                {
                    name: 'PRESSURE',
                    value: 1028.6
                },
                {
                    name: 'HUMIDITY',
                    value: 90.25
                },
                {
                    name: 'TEMPERATURE',
                    value: 3.32
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 69.94,
                    level: 'MEDIUM',
                    description: 'Well... It\'s been better.',
                    advice: 'Something\'s hanging in the air. Take care!',
                    color: '#EFBB0F'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 189.87
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 163.8
                }
            ]
        },
        {
            fromDateTime: '2019-02-25T21:00:00.000Z',
            tillDateTime: '2019-02-25T22:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 32.82
                },
                {
                    name: 'PM25',
                    value: 51.51
                },
                {
                    name: 'PM10',
                    value: 87.79
                },
                {
                    name: 'PRESSURE',
                    value: 1027.67
                },
                {
                    name: 'HUMIDITY',
                    value: 89.5
                },
                {
                    name: 'TEMPERATURE',
                    value: 3.17
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 73.62,
                    level: 'MEDIUM',
                    description: 'Well... It\'s been better.',
                    advice: 'Things were good once... Let\'s hope it doesn\'t get worse!',
                    color: '#EFBB0F'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 206.02
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 175.58
                }
            ]
        },
        {
            fromDateTime: '2019-02-25T22:00:00.000Z',
            tillDateTime: '2019-02-25T23:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 34.37
                },
                {
                    name: 'PM25',
                    value: 54.22
                },
                {
                    name: 'PM10',
                    value: 91.77
                },
                {
                    name: 'PRESSURE',
                    value: 1027.03
                },
                {
                    name: 'HUMIDITY',
                    value: 90.25
                },
                {
                    name: 'TEMPERATURE',
                    value: 2.93
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 75.49,
                    level: 'HIGH',
                    description: 'Poor air quality!',
                    advice: 'Don\'t go out, unless you want to breathe like Darth Vader!',
                    color: '#EF7120'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 216.87
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 183.54
                }
            ]
        },
        {
            fromDateTime: '2019-02-25T23:00:00.000Z',
            tillDateTime: '2019-02-26T00:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 34.06
                },
                {
                    name: 'PM25',
                    value: 53.32
                },
                {
                    name: 'PM10',
                    value: 90.1
                },
                {
                    name: 'PRESSURE',
                    value: 1026.56
                },
                {
                    name: 'HUMIDITY',
                    value: 87.25
                },
                {
                    name: 'TEMPERATURE',
                    value: 2.58
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 75.03,
                    level: 'HIGH',
                    description: 'Poor air quality!',
                    advice: 'Define the air quality in one word? NOT GOOD. Ok, two words ;)',
                    color: '#EF7120'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 213.27
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 180.2
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T00:00:00.000Z',
            tillDateTime: '2019-02-26T01:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 34.61
                },
                {
                    name: 'PM25',
                    value: 53.52
                },
                {
                    name: 'PM10',
                    value: 90.15
                },
                {
                    name: 'PRESSURE',
                    value: 1026.14
                },
                {
                    name: 'HUMIDITY',
                    value: 93.25
                },
                {
                    name: 'TEMPERATURE',
                    value: 1.88
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 75.04,
                    level: 'HIGH',
                    description: 'Poor air quality!',
                    advice: 'It\'s not good, oh no!',
                    color: '#EF7120'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 214.07
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 180.3
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T01:00:00.000Z',
            tillDateTime: '2019-02-26T02:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 30.23
                },
                {
                    name: 'PM25',
                    value: 46.03
                },
                {
                    name: 'PM10',
                    value: 75.75
                },
                {
                    name: 'PRESSURE',
                    value: 1025.12
                },
                {
                    name: 'HUMIDITY',
                    value: 93.25
                },
                {
                    name: 'TEMPERATURE',
                    value: 1.53
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 66.1,
                    level: 'MEDIUM',
                    description: 'Well... It\'s been better.',
                    advice: 'Try to stay with your family at home.',
                    color: '#EFBB0F'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 184.1
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 151.5
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T02:00:00.000Z',
            tillDateTime: '2019-02-26T03:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 27.27
                },
                {
                    name: 'PM25',
                    value: 40.97
                },
                {
                    name: 'PM10',
                    value: 66.07
                },
                {
                    name: 'PRESSURE',
                    value: 1024.85
                },
                {
                    name: 'HUMIDITY',
                    value: 91.54
                },
                {
                    name: 'TEMPERATURE',
                    value: 2.03
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 60.97,
                    level: 'MEDIUM',
                    description: 'Well... It\'s been better.',
                    advice: 'Protect your lungs!',
                    color: '#EFBB0F'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 163.86
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 132.14
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T03:00:00.000Z',
            tillDateTime: '2019-02-26T04:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 24.38
                },
                {
                    name: 'PM25',
                    value: 36.38
                },
                {
                    name: 'PM10',
                    value: 58.25
                },
                {
                    name: 'PRESSURE',
                    value: 1024.66
                },
                {
                    name: 'HUMIDITY',
                    value: 87.52
                },
                {
                    name: 'TEMPERATURE',
                    value: 2.63
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 56.38,
                    level: 'MEDIUM',
                    description: 'Well... It\'s been better.',
                    advice: 'The smog is coming! :O',
                    color: '#EFBB0F'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 145.54
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 116.49
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T04:00:00.000Z',
            tillDateTime: '2019-02-26T05:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 22.44
                },
                {
                    name: 'PM25',
                    value: 33.29
                },
                {
                    name: 'PM10',
                    value: 51.84
                },
                {
                    name: 'PRESSURE',
                    value: 1024.4
                },
                {
                    name: 'HUMIDITY',
                    value: 86.15
                },
                {
                    name: 'TEMPERATURE',
                    value: 2.77
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 53.29,
                    level: 'MEDIUM',
                    description: 'Well... It\'s been better.',
                    advice: 'The air is slightly polluted.',
                    color: '#EFBB0F'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 133.14
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 103.68
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T05:00:00.000Z',
            tillDateTime: '2019-02-26T06:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 20.4
                },
                {
                    name: 'PM25',
                    value: 30.11
                },
                {
                    name: 'PM10',
                    value: 44.24
                },
                {
                    name: 'PRESSURE',
                    value: 1024.25
                },
                {
                    name: 'HUMIDITY',
                    value: 87.53
                },
                {
                    name: 'TEMPERATURE',
                    value: 2.91
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 50.11,
                    level: 'MEDIUM',
                    description: 'Well... It\'s been better.',
                    advice: 'Something\'s hanging in the air. Take care!',
                    color: '#EFBB0F'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 120.43
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 88.48
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T06:00:00.000Z',
            tillDateTime: '2019-02-26T07:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 18.95
                },
                {
                    name: 'PM25',
                    value: 26.84
                },
                {
                    name: 'PM10',
                    value: 38.27
                },
                {
                    name: 'PRESSURE',
                    value: 1024.08
                },
                {
                    name: 'HUMIDITY',
                    value: 84.4
                },
                {
                    name: 'TEMPERATURE',
                    value: 2.83
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 44.74,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Enjoy the clean air.',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 107.37
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 76.53
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T07:00:00.000Z',
            tillDateTime: '2019-02-26T08:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 17.08
                },
                {
                    name: 'PM25',
                    value: 23.99
                },
                {
                    name: 'PM10',
                    value: 34.04
                },
                {
                    name: 'PRESSURE',
                    value: 1024.22
                },
                {
                    name: 'HUMIDITY',
                    value: 86.5
                },
                {
                    name: 'TEMPERATURE',
                    value: 2.5
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 39.98,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Leave the mask at home today!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 95.95
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 68.07
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T08:00:00.000Z',
            tillDateTime: '2019-02-26T09:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 16.35
                },
                {
                    name: 'PM25',
                    value: 22.93
                },
                {
                    name: 'PM10',
                    value: 32.47
                },
                {
                    name: 'PRESSURE',
                    value: 1024.4
                },
                {
                    name: 'HUMIDITY',
                    value: 81.14
                },
                {
                    name: 'TEMPERATURE',
                    value: 4.54
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 38.22,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'A perfect day for outdoor sports!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 91.72
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 64.95
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T09:00:00.000Z',
            tillDateTime: '2019-02-26T10:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 12.88
                },
                {
                    name: 'PM25',
                    value: 17.91
                },
                {
                    name: 'PM10',
                    value: 25.53
                },
                {
                    name: 'PRESSURE',
                    value: 1024.97
                },
                {
                    name: 'HUMIDITY',
                    value: 73.23
                },
                {
                    name: 'TEMPERATURE',
                    value: 6.14
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 29.85,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Time for a walk with friends or activities with your family - because the air is clean!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 71.65
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 51.06
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T10:00:00.000Z',
            tillDateTime: '2019-02-26T11:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 10.73
                },
                {
                    name: 'PM25',
                    value: 14.82
                },
                {
                    name: 'PM10',
                    value: 21.01
                },
                {
                    name: 'PRESSURE',
                    value: 1024.8
                },
                {
                    name: 'HUMIDITY',
                    value: 65.5
                },
                {
                    name: 'TEMPERATURE',
                    value: 7.45
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 24.7,
                    level: 'VERY_LOW',
                    description: 'Great air here today!',
                    advice: 'Breathe deep! The air is clean!',
                    color: '#6BC926'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 59.27
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 42.02
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T11:00:00.000Z',
            tillDateTime: '2019-02-26T12:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 8.79
                },
                {
                    name: 'PM25',
                    value: 12.25
                },
                {
                    name: 'PM10',
                    value: 17.39
                },
                {
                    name: 'PRESSURE',
                    value: 1024.82
                },
                {
                    name: 'HUMIDITY',
                    value: 60.28
                },
                {
                    name: 'TEMPERATURE',
                    value: 8.83
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 20.42,
                    level: 'VERY_LOW',
                    description: 'Great air here today!',
                    advice: 'The air is great!',
                    color: '#6BC926'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 49.01
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 34.79
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T12:00:00.000Z',
            tillDateTime: '2019-02-26T13:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 6.32
                },
                {
                    name: 'PM25',
                    value: 7.96
                },
                {
                    name: 'PM10',
                    value: 11.45
                },
                {
                    name: 'PRESSURE',
                    value: 1024.42
                },
                {
                    name: 'HUMIDITY',
                    value: 60.46
                },
                {
                    name: 'TEMPERATURE',
                    value: 8.13
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 13.27,
                    level: 'VERY_LOW',
                    description: 'Great air here today!',
                    advice: 'Breathe deeply!',
                    color: '#6BC926'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 31.85
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 22.9
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T13:00:00.000Z',
            tillDateTime: '2019-02-26T14:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 3.34
                },
                {
                    name: 'PM25',
                    value: 4.74
                },
                {
                    name: 'PM10',
                    value: 7.1
                },
                {
                    name: 'PRESSURE',
                    value: 1024.54
                },
                {
                    name: 'HUMIDITY',
                    value: 52.04
                },
                {
                    name: 'TEMPERATURE',
                    value: 9.75
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 7.9,
                    level: 'VERY_LOW',
                    description: 'Great air here today!',
                    advice: 'Great air!',
                    color: '#6BC926'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 18.96
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 14.2
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T14:00:00.000Z',
            tillDateTime: '2019-02-26T15:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 2.4
                },
                {
                    name: 'PM25',
                    value: 3.35
                },
                {
                    name: 'PM10',
                    value: 4.7
                },
                {
                    name: 'PRESSURE',
                    value: 1024.6
                },
                {
                    name: 'HUMIDITY',
                    value: 52.65
                },
                {
                    name: 'TEMPERATURE',
                    value: 9.53
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 5.58,
                    level: 'VERY_LOW',
                    description: 'Great air here today!',
                    advice: 'Breathe as much as you can!',
                    color: '#6BC926'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 13.39
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 9.4
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T15:00:00.000Z',
            tillDateTime: '2019-02-26T16:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 3.05
                },
                {
                    name: 'PM25',
                    value: 4.39
                },
                {
                    name: 'PM10',
                    value: 6.64
                },
                {
                    name: 'PRESSURE',
                    value: 1025.05
                },
                {
                    name: 'HUMIDITY',
                    value: 52.78
                },
                {
                    name: 'TEMPERATURE',
                    value: 9.29
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 7.32,
                    level: 'VERY_LOW',
                    description: 'Great air here today!',
                    advice: 'Breathe deeply!',
                    color: '#6BC926'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 17.57
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 13.27
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T16:00:00.000Z',
            tillDateTime: '2019-02-26T17:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 2.42
                },
                {
                    name: 'PM25',
                    value: 3.55
                },
                {
                    name: 'PM10',
                    value: 5.42
                },
                {
                    name: 'PRESSURE',
                    value: 1025.58
                },
                {
                    name: 'HUMIDITY',
                    value: 53.55
                },
                {
                    name: 'TEMPERATURE',
                    value: 8.9
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 5.92,
                    level: 'VERY_LOW',
                    description: 'Great air here today!',
                    advice: 'Great air!',
                    color: '#6BC926'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 14.22
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 10.83
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T17:00:00.000Z',
            tillDateTime: '2019-02-26T18:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 3.98
                },
                {
                    name: 'PM25',
                    value: 5.89
                },
                {
                    name: 'PM10',
                    value: 9.04
                },
                {
                    name: 'PRESSURE',
                    value: 1026.65
                },
                {
                    name: 'HUMIDITY',
                    value: 58.62
                },
                {
                    name: 'TEMPERATURE',
                    value: 7.16
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 9.81,
                    level: 'VERY_LOW',
                    description: 'Great air here today!',
                    advice: 'Feel free to run, walk, dance and let the air outside in today!',
                    color: '#6BC926'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 23.56
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 18.09
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T18:00:00.000Z',
            tillDateTime: '2019-02-26T19:00:00.000Z',
            values: [
                {
                    name: 'PM1',
                    value: 4.83
                },
                {
                    name: 'PM25',
                    value: 6.98
                },
                {
                    name: 'PM10',
                    value: 10.46
                },
                {
                    name: 'PRESSURE',
                    value: 1026.88
                },
                {
                    name: 'HUMIDITY',
                    value: 62.67
                },
                {
                    name: 'TEMPERATURE',
                    value: 6.19
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 11.64,
                    level: 'VERY_LOW',
                    description: 'Great air here today!',
                    advice: 'Catch your breath!',
                    color: '#6BC926'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 27.94
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 20.92
                }
            ]
        }
    ],
    forecast: [
        {
            fromDateTime: '2019-02-26T19:00:00.000Z',
            tillDateTime: '2019-02-26T20:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 11.02
                },
                {
                    name: 'PM10',
                    value: 21.6
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 21.6,
                    level: 'VERY_LOW',
                    description: 'Great air here today!',
                    advice: 'It couldn\'t be better ;)',
                    color: '#6BC926'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 44.07
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 43.19
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T20:00:00.000Z',
            tillDateTime: '2019-02-26T21:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 16.12
                },
                {
                    name: 'PM10',
                    value: 29.77
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 29.77,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Leave the mask at home today!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 64.5
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 59.55
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T21:00:00.000Z',
            tillDateTime: '2019-02-26T22:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 20.35
                },
                {
                    name: 'PM10',
                    value: 35.75
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 35.75,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'You can go out and enjoy nature without worries.',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 81.39
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 71.49
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T22:00:00.000Z',
            tillDateTime: '2019-02-26T23:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 23.43
                },
                {
                    name: 'PM10',
                    value: 39.5
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 39.5,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'You can go outside without any worries.',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 93.72
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 79
                }
            ]
        },
        {
            fromDateTime: '2019-02-26T23:00:00.000Z',
            tillDateTime: '2019-02-27T00:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 25.09
                },
                {
                    name: 'PM10',
                    value: 41.1
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 41.81,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Take a breath!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 100.35
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 82.21
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T00:00:00.000Z',
            tillDateTime: '2019-02-27T01:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 25.32
                },
                {
                    name: 'PM10',
                    value: 40.5
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 42.2,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Time for a walk with friends or activities with your family - because the air is clean!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 101.27
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 80.99
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T01:00:00.000Z',
            tillDateTime: '2019-02-27T02:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 24.68
                },
                {
                    name: 'PM10',
                    value: 38.42
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 41.14,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'The air quality is good today!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 98.74
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 76.85
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T02:00:00.000Z',
            tillDateTime: '2019-02-27T03:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 23.85
                },
                {
                    name: 'PM10',
                    value: 36.13
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 39.74,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Enjoy the clean air.',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 95.39
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 72.27
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T03:00:00.000Z',
            tillDateTime: '2019-02-27T04:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 23.14
                },
                {
                    name: 'PM10',
                    value: 34.05
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 38.56,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Take a breath!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 92.54
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 68.09
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T04:00:00.000Z',
            tillDateTime: '2019-02-27T05:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 22.78
                },
                {
                    name: 'PM10',
                    value: 32.73
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 37.97,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'You can go out and enjoy nature without worries.',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 91.13
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 65.45
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T05:00:00.000Z',
            tillDateTime: '2019-02-27T06:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 22.83
                },
                {
                    name: 'PM10',
                    value: 32.14
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 38.05,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'How about going for a walk?',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 91.31
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 64.29
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T06:00:00.000Z',
            tillDateTime: '2019-02-27T07:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 23.45
                },
                {
                    name: 'PM10',
                    value: 32.64
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 39.08,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Yes, yes - it\'s true. The air quality is good today!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 93.8
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 65.27
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T07:00:00.000Z',
            tillDateTime: '2019-02-27T08:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 24.45
                },
                {
                    name: 'PM10',
                    value: 33.79
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 40.75,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Enjoy the clean air.',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 97.8
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 67.57
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T08:00:00.000Z',
            tillDateTime: '2019-02-27T09:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 25.34
                },
                {
                    name: 'PM10',
                    value: 34.94
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 42.23,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Don\'t miss this day! The clean air calls!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 101.36
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 69.87
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T09:00:00.000Z',
            tillDateTime: '2019-02-27T10:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 25.77
                },
                {
                    name: 'PM10',
                    value: 35.53
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 42.95,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Leave the mask at home today!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 103.07
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 71.07
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T10:00:00.000Z',
            tillDateTime: '2019-02-27T11:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 25.42
                },
                {
                    name: 'PM10',
                    value: 35.34
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 42.37,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Leave the mask at home today!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 101.69
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 70.68
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T11:00:00.000Z',
            tillDateTime: '2019-02-27T12:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 24.22
                },
                {
                    name: 'PM10',
                    value: 34.11
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 40.36,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Do you smell it? That\'s the smell of clean air. :)',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 96.87
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 68.23
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T12:00:00.000Z',
            tillDateTime: '2019-02-27T13:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 22.57
                },
                {
                    name: 'PM10',
                    value: 32.56
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 37.61,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'The air quality is good today!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 90.26
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 65.13
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T13:00:00.000Z',
            tillDateTime: '2019-02-27T14:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 21.02
                },
                {
                    name: 'PM10',
                    value: 31.25
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 35.04,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'How about going for a walk?',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 84.09
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 62.49
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T14:00:00.000Z',
            tillDateTime: '2019-02-27T15:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 19.73
                },
                {
                    name: 'PM10',
                    value: 30.27
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 32.88,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'A perfect day for outdoor sports!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 78.92
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 60.54
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T15:00:00.000Z',
            tillDateTime: '2019-02-27T16:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 19.17
                },
                {
                    name: 'PM10',
                    value: 30.31
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 31.95,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Enjoy the clean air.',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 76.68
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 60.63
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T16:00:00.000Z',
            tillDateTime: '2019-02-27T17:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 19.37
                },
                {
                    name: 'PM10',
                    value: 31.37
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 32.29,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Enjoy the clean air.',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 77.49
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 62.73
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T17:00:00.000Z',
            tillDateTime: '2019-02-27T18:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 20.25
                },
                {
                    name: 'PM10',
                    value: 33.42
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 33.74,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Take a breath!',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 80.99
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 66.84
                }
            ]
        },
        {
            fromDateTime: '2019-02-27T18:00:00.000Z',
            tillDateTime: '2019-02-27T19:00:00.000Z',
            values: [
                {
                    name: 'PM25',
                    value: 21.69
                },
                {
                    name: 'PM10',
                    value: 35.92
                }
            ],
            indexes: [
                {
                    name: 'AIRLY_CAQI',
                    value: 36.16,
                    level: 'LOW',
                    description: 'Air is quite good.',
                    advice: 'Do you smell it? That\'s the smell of clean air. :)',
                    color: '#D1CF1E'
                }
            ],
            standards: [
                {
                    name: 'WHO',
                    pollutant: 'PM25',
                    limit: 25,
                    percent: 86.78
                },
                {
                    name: 'WHO',
                    pollutant: 'PM10',
                    limit: 50,
                    percent: 71.84
                }
            ]
        }
    ]
}
