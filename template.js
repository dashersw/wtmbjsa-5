// https://next.json-generator.com/EyMaiQXaN

[{
  'repeat(100)': {
    "caseId": '{{guid()}}',
    "type": "{{random('Open Man Hole Cover', 'Broken Street Lamp', 'Open Fire Hydrant', 'Missing Sign', 'Missing Sign', 'Uncollected Garbage', 'Obstructed Parking', 'Dead Animal', 'Fallen Tree', 'Other', 'Other', 'Other')}}",
    "address": {
      "state": "{{state()}}",
      "city": "{{city()}}",
      "street": '{{street()}}',
      "houseNo": "{{integer(1,100)}}"
    },
    "openedAt": '{{moment(this.date(new Date(2018, 3, 1), new Date()))}}',
    "updatedAt": '{{moment(this.date(new Date(2018, 3, 1), new Date()))}}',
    "status": function CaseStatus(idx) {
      var types = ['open', 'pending', 'closed'];
      return types[idx.floating(0, types.length)];
    },
    "description": '{{lorem(1,"sentences")}}',
    "requester": {
      "firstName": '{{firstName()}}',
      "lastName": '{{surname()}}',
      "age": '{{integer(15,50)}}',
      "gender": '{{random("M", "F", "O")}}',
    },
    "phoneNumbers": [{
      "type": "home",
      "number": '+1 {{phone()}}'
    }, {
      "type": "fax",
      "number": '+1 {{phone()}}'
    }],
    location: {
      type: "Point",
      coordinates: [
        '{{floating(-122.550001, -121.3900001)}}',
        '{{floating(38.600001, 37.8000000)}}'
      ]
    }
  }
}]
