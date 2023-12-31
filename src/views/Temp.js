/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from 'react';
import { useFetch } from './ApiUrl';


import { useQuery } from "react-query";
import axios from "axios";



/* import React from "react"; */
// nodejs library that concatenates classes
// import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";


import { Dropdown } from 'react-bootstrap';

import { useState } from 'react';
import Highcharts from 'highcharts';
import DarkUnica from 'highcharts/themes/high-contrast-dark';
import HC_more from 'highcharts/highcharts-more' //module

import { useSDK } from "@metamask/sdk-react-ui";


HC_more(Highcharts) //init module
DarkUnica(Highcharts);



function DashboardProposal(props) {

  // Current proposal
  // type Proposal = {
  //   id_proposal: number;
  //   description: string;
  //   proposer_wallet: string;
  //   Quorum: number;
  //   beginDate: string;
  //   endDate: string;
  // };
  const { sdk, connected, connecting, provider, chainId } = useSDK();
  // use state loading
  const [loading, setLoading] = useState(true);

  const [selectedContract, setSelectedContract] = useState("TrueFi"); // useState<Partial<Contract>>({});
  const [selectedProposal, setSelectedProposal] = useState({}); // useState<Partial<Proposal>>({});


  const contract_endpoints = {
    "GovChainBoard": "https://api.studio.thegraph.com/query/54390/govchainboard-scroll-governor/version/latest",
    "TrueFi": "https://api.studio.thegraph.com/query/54390/truefi-governor/version/latest",
    "EnsDAO": "https://api.studio.thegraph.com/query/54390/ens-dao/version/latest",
  }

  // let endpoint = "https://api.studio.thegraph.com/query/54390/truefi-governor/version/latest"
const query_votes = `
  {
    voteCasts {
      weight
      voter
      proposalId
    }
  }
`;
const query_proposals = `
  {
    voteCasts {
      weight
      voter
      proposalId
    }
  }
`;
  const [votesData, setVotesData] = useState(false);

  useQuery("votes", () => {
    return axios({
      url: contract_endpoints[selectedContract],
      method: "POST",
      data: {
        query: query_votes
      }
    }).then(response => setVotesData( response.data.data));
  });





// UseStates votes_data
  // const [votes_data, setVotesData] = useState({});

  // setVotesData(votes_data_);
  // useEffect(() => {

  //   setVotesData(votes_data_)
  //   console.log(votes_data_)

  // }, [votes_data_]);
  // useEffect(() => {

  //   // setVotesData(votes_data_)
  //   console.log(votes_data)

  // }, [votes_data]);


  const proposals_data  = [
    {
        "id_proposal": 1,
        "description": "Proposal for a new community garden",
        "proposer_wallet": "0xABCDEF1234567890",
        "Quorum": 10,
        "beginDate": "2023-10-20",
        "endDate": "2023-11-20"
    },
    {
        "id_proposal": 2,
        "description": "Budget proposal for office renovations",
        "proposer_wallet": "0x1234567890ABCDEF",
        "Quorum": 15,
        "beginDate": "2023-10-25",
        "endDate": "2023-11-25"
    },
    {
        "id_proposal": 3,
        "description": "Policy change regarding remote work",
        "proposer_wallet": "0xFEDCBA0987654321",
        "Quorum": 20,
        "beginDate": "2023-10-30",
        "endDate": "2023-11-30"
    },
    {
        "id_proposal": 4,
        "description": "New product development proposal",
        "proposer_wallet": "0x567890ABCDEF1234",
        "Quorum": 12,
        "beginDate": "2023-11-01",
        "endDate": "2023-12-01"
    }
  ];

  const handleDropdownProposalChange = (event) => {
    console.log(event.target.value);
    console.log(proposals_data.find(proposal => proposal.id_proposal === event.target.value));
    setSelectedProposal(proposals_data.find(proposal => proposal.id_proposal === parseInt(event.target.value)));
  };

  const votes_results = [
    {
        "wallet": "0xABCDEF1234567890",
        "vote": "for",
        "reason": "I support the proposal for the community garden",
        "voteDate": "2023-10-21",
        "proposal_id": 1
    },
    {
        "wallet": "0x1234567890ABCDEF",
        "vote": "against",
        "reason": "I oppose the budget proposal for office renovations",
        "voteDate": "2023-10-26",
        "proposal_id": 2
    },
    {
        "wallet": "0xFEDCBA0987654321",
        "vote": "abstain",
        "reason": "I'm undecided on the policy change regarding remote work",
        "voteDate": "2023-10-31",
        "proposal_id": 3
    },
    {
        "wallet": "0x567890ABCDEF1234",
        "vote": "for",
        "voteDate": "2023-11-02",
        "proposal_id": 4
    },
    {
        "wallet": "0x9ABCDEF1234567890",
        "vote": "for",
        "reason": "I want to support the community garden project",
        "voteDate": "2023-11-03",
        "proposal_id": 1
    },
    {
        "wallet": "0x7890ABCDEF123456",
        "vote": "against",
        "reason": "I think the office renovation budget is excessive",
        "voteDate": "2023-11-05",
        "proposal_id": 1
    },
    {
        "wallet": "0x234567890ABCDEF1",
        "vote": "for",
        "reason": "I believe in the importance of community gardens",
        "voteDate": "2023-11-07",
        "proposal_id": 1
    },
    {
        "wallet": "0x5432109876543210",
        "vote": "abstain",
        "voteDate": "2023-11-09",
        "proposal_id": 1
    },
    {
        "wallet": "0xA1B2C3D4E5F6A7B8",
        "vote": "for",
        "reason": "I support the community garden initiative",
        "voteDate": "2023-11-11",
        "proposal_id": 1
    },
    {
        "wallet": "0xB1C2D3E4F5A6B7C8",
        "vote": "against",
        "reason": "I have concerns about the garden's maintenance",
        "voteDate": "2023-11-13",
        "proposal_id": 1
    },
    {
        "wallet": "0xC1D2E3F4A5B6C7D8",
        "vote": "for",
        "voteDate": "2023-11-15",
        "proposal_id": 1
    },
    {
      "wallet": "0xD8C7B6A5F4E3D2C1",
      "vote": "against",
      "reason": "I have concerns about the proposal's sustainability",
      "voteDate": "2023-11-17",
      "proposal_id": 1
    },
    {
        "wallet": "0xE7B6A5F4E3D2C1D8",
        "vote": "for",
        "reason": "I believe in the benefits of a community garden",
        "voteDate": "2023-11-19",
        "proposal_id": 1
    },
    {
        "wallet": "0xF6A5B4E3D2C1D8C7",
        "vote": "abstain",
        "voteDate": "2023-11-21",
        "proposal_id": 1
    },
    {
        "wallet": "0xA5B4E3D2C1D8C7F6",
        "vote": "for",
        "reason": "I think a community garden would be a great addition",
        "voteDate": "2023-11-23",
        "proposal_id": 1
    },
    {
        "wallet": "0xB4E3D2C1D8C7F6A5",
        "vote": "against",
        "reason": "I'm concerned about the space for the garden",
        "voteDate": "2023-11-25",
        "proposal_id": 1
    },
    {
        "wallet": "0xC3D2C1D8C7F6A5B4",
        "vote": "for",
        "voteDate": "2023-11-27",
        "proposal_id": 1
    },
    {
        "wallet": "0xD2C1D8C7F6A5B4E3",
        "vote": "for",
        "reason": "I support community initiatives like this",
        "voteDate": "2023-11-29",
        "proposal_id": 1
    },
    {
        "wallet": "0xC1D8C7F6A5B4E3D2",
        "vote": "abstain",
        "voteDate": "2023-12-01",
        "proposal_id": 1
    },
    {
        "wallet": "0xF5A6B7C8D1E2C3B4",
        "vote": "for",
        "reason": "I'm in favor of more green spaces in our community",
        "voteDate": "2023-12-03",
        "proposal_id": 1
    },
    {
        "wallet": "0xD1E2C3B4F5A6B7C8",
        "vote": "against",
        "reason": "I have concerns about maintenance costs",
        "voteDate": "2023-12-05",
        "proposal_id": 1
    },
  ];




  const participant_data = {
    '0xFEDCBA0987654321': {
        'TokensNumber': 100,
        'MemberSince': '2021-01-01',
        'HistoricParticipation': 85,
    },
    '0xA5B4E3D2C1D8C7F6': {
        'TokensNumber': 75,
        'MemberSince': '2020-03-15',
        'HistoricParticipation': 50,
    },
    '0xC3D2C1D8C7F6A5B4': {
        'TokensNumber': 50,
        'MemberSince': '2019-06-20',
        'HistoricParticipation': 25,
    },
    '0x234567890ABCDEF1': {
        'TokensNumber': 200,
        'MemberSince': '2022-05-10',
        'HistoricParticipation': 90,
    },
    '0x567890ABCDEF1234': {
        'TokensNumber': 150,
        'MemberSince': '2020-12-05',
        'HistoricParticipation': 60,
    },
    '0xABCDEF1234567890': {
        'TokensNumber': 300,
        'MemberSince': '2018-09-28',
        'HistoricParticipation': 95,
    },
    '0xB1C2D3E4F5A6B7C8': {
        'TokensNumber': 120,
        'MemberSince': '2019-11-30',
        'HistoricParticipation': 55,
    },
    '0x1234567890ABCDEF': {
        'TokensNumber': 80,
        'MemberSince': '2021-08-17',
        'HistoricParticipation': 30,
    },
    '0xD8C7B6A5F4E3D2C1': {
        'TokensNumber': 90,
        'MemberSince': '2021-02-14',
        'HistoricParticipation': 40,
    },
    '0x7890ABCDEF123456': {
        'TokensNumber': 110,
        'MemberSince': '2019-04-03',
        'HistoricParticipation': 50,
    },
    '0x5432109876543210': {
        'TokensNumber': 60,
        'MemberSince': '2020-10-22',
        'HistoricParticipation': 20,
    },
    '0xA1B2C3D4E5F6A7B8': {
        'TokensNumber': 180,
        'MemberSince': '2018-07-12',
        'HistoricParticipation': 75,
    },
    '0xE7B6A5F4E3D2C1D8': {
        'TokensNumber': 95,
        'MemberSince': '2020-01-08',
        'HistoricParticipation': 35,
    },
    '0xF6A5B4E3D2C1D8C7': {
        'TokensNumber': 70,
        'MemberSince': '2021-03-25',
        'HistoricParticipation': 15,
    },
    '0xC1D8C7F6A5B4E3D2': {
        'TokensNumber': 130,
        'MemberSince': '2019-10-05',
        'HistoricParticipation': 45,
    },
    '0xD2C1D8C7F6A5B4E3': {
        'TokensNumber': 85,
        'MemberSince': '2021-07-19',
        'HistoricParticipation': 25,
    },
    '0xB4E3D2C1D8C7F6A5': {
        'TokensNumber': 115,
        'MemberSince': '2019-05-12',
        'HistoricParticipation': 50,
    },
    '0xD1E2C3B4F5A6B7C8': {
        'TokensNumber': 140,
        'MemberSince': '2019-12-10',
        'HistoricParticipation': 60,
    },
    '0xF5A6B7C8D1E2C3B4': {
        'TokensNumber': 160,
        'MemberSince': '2019-03-05',
        'HistoricParticipation': 80,
    },
}



  useEffect(() => {

    setSelectedProposal(proposals_data[0])



    Highcharts.setOptions({
      chart: {
          backgroundColor : "#27293d",
          plotBackgroundColor: '#27293d',

      }
    });
    Highcharts.defaultOptions.legend.backgroundColor =  "#27293d";


    const chartData = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Browser market shares. January, 2022',
            align: 'left'
        },
        subtitle: {
            text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
            align: 'left'
        },

        accessibility: {
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        },

        plotOptions: {
            series: {
                borderRadius: 5,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [
            {
                name: 'Browsers',
                colorByPoint: true,
                data: [
                    {
                        name: 'Chrome',
                        y: 61.04,
                        drilldown: 'Chrome'
                    },
                    {
                        name: 'Safari',
                        y: 9.47,
                        drilldown: 'Safari'
                    },
                    {
                        name: 'Edge',
                        y: 9.32,
                        drilldown: 'Edge'
                    },
                    {
                        name: 'Firefox',
                        y: 8.15,
                        drilldown: 'Firefox'
                    },
                    {
                        name: 'Other',
                        y: 11.02,
                        drilldown: null
                    }
                ]
            }
        ],
        drilldown: {
            series: [
                {
                    name: 'Chrome',
                    id: 'Chrome',
                    data: [
                        [
                            'v97.0',
                            36.89
                        ],
                        [
                            'v96.0',
                            18.16
                        ],
                        [
                            'v95.0',
                            0.54
                        ],
                        [
                            'v94.0',
                            0.7
                        ],
                        [
                            'v93.0',
                            0.8
                        ],
                        [
                            'v92.0',
                            0.41
                        ],
                        [
                            'v91.0',
                            0.31
                        ],
                        [
                            'v90.0',
                            0.13
                        ],
                        [
                            'v89.0',
                            0.14
                        ],
                        [
                            'v88.0',
                            0.1
                        ],
                        [
                            'v87.0',
                            0.35
                        ],
                        [
                            'v86.0',
                            0.17
                        ],
                        [
                            'v85.0',
                            0.18
                        ],
                        [
                            'v84.0',
                            0.17
                        ],
                        [
                            'v83.0',
                            0.21
                        ],
                        [
                            'v81.0',
                            0.1
                        ],
                        [
                            'v80.0',
                            0.16
                        ],
                        [
                            'v79.0',
                            0.43
                        ],
                        [
                            'v78.0',
                            0.11
                        ],
                        [
                            'v76.0',
                            0.16
                        ],
                        [
                            'v75.0',
                            0.15
                        ],
                        [
                            'v72.0',
                            0.14
                        ],
                        [
                            'v70.0',
                            0.11
                        ],
                        [
                            'v69.0',
                            0.13
                        ],
                        [
                            'v56.0',
                            0.12
                        ],
                        [
                            'v49.0',
                            0.17
                        ]
                    ]
                },
                {
                    name: 'Safari',
                    id: 'Safari',
                    data: [
                        [
                            'v15.3',
                            0.1
                        ],
                        [
                            'v15.2',
                            2.01
                        ],
                        [
                            'v15.1',
                            2.29
                        ],
                        [
                            'v15.0',
                            0.49
                        ],
                        [
                            'v14.1',
                            2.48
                        ],
                        [
                            'v14.0',
                            0.64
                        ],
                        [
                            'v13.1',
                            1.17
                        ],
                        [
                            'v13.0',
                            0.13
                        ],
                        [
                            'v12.1',
                            0.16
                        ]
                    ]
                },
                {
                    name: 'Edge',
                    id: 'Edge',
                    data: [
                        [
                            'v97',
                            6.62
                        ],
                        [
                            'v96',
                            2.55
                        ],
                        [
                            'v95',
                            0.15
                        ]
                    ]
                },
                {
                    name: 'Firefox',
                    id: 'Firefox',
                    data: [
                        [
                            'v96.0',
                            4.17
                        ],
                        [
                            'v95.0',
                            3.33
                        ],
                        [
                            'v94.0',
                            0.11
                        ],
                        [
                            'v91.0',
                            0.23
                        ],
                        [
                            'v78.0',
                            0.16
                        ],
                        [
                            'v52.0',
                            0.15
                        ]
                    ]
                }
            ]
        }
    }
    const voteDistribution = {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Proposal Results',
          align: 'left'
      },
      xAxis: {
          categories: ['For', 'Against', 'Abstain']
      },
      yAxis: {
          min: 0,
          title: {
              text: 'No. Votes'
          },
          stackLabels: {
              enabled: true
          }
      },
      legend: {
          align: 'left',
          x: 70,
          verticalAlign: 'top',
          y: 70,
          floating: true,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || 'white',
          borderColor: '#CCC',
          borderWidth: 1,
          shadow: false

      },
      tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
          column: {
              stacking: 'normal',
              dataLabels: {
                  enabled: true
              }
          }
      },
      series: [{
          name: 'UpVote',
          data: [20],
          color: "#42f593"
      }, {
          name: 'Against',
          data: [10],
          color: "#f5427b"
      }, {
          name: 'Abstain',
          data: [3],
          color: "#42aaf5"
      }]
    }
    const scatterPlot =  {

      chart: {
          type: 'bubble',
          plotBorderWidth: 1,
          zoomType: 'xy'
      },

      title: {
          text: 'Participants Information',
          align: 'left'
      },

      xAxis: {
          gridLineWidth: 1,
          title: {
              text: 'DAO Member Since'
          },
          accessibility: {
              rangeDescription: 'DAO Member Since'
          }
      },

      yAxis: {
          startOnTick: false,
          endOnTick: false,
          title: {
            text: 'No. Tokens'
         },
          accessibility: {
              rangeDescription: 'No. Tokens'
          }
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: 'Member Since: {point.x}<br/>No. Tokens: {point.y}<br/>Participation Rate: {point.z}'
    },
      series: [{
          name: "Upvote",
          data: [
              [9, 81, 63],
              [98, 5, 89],
              [51, 50, 73],
              [41, 22, 14],
              [58, 24, 20],
              [78, 37, 34],
              [55, 56, 53],
              [18, 45, 70],
              [42, 44, 28],
              [3, 52, 59],
              [31, 18, 97],
              [79, 91, 63],
              [93, 23, 23],
              [44, 83, 22]
          ],
          marker: {
              fillColor: "#42f593"
          }
      }, {
          name: "Against",
          data: [
              [42, 38, 20],
              [6, 18, 1],
              [1, 93, 55],
              [57, 2, 90],
              [80, 76, 22],
              [11, 74, 96],
              [88, 56, 10],
              [30, 47, 49],
              [57, 62, 98],
              [4, 16, 16],
              [46, 10, 11],
              [22, 87, 89],
              [57, 91, 82],
              [45, 15, 98]
          ],
          marker: {
              fillColor: "#f5427b"
          }
      },
      {
        name: "Abstain",
        data: [
            [45, 20, 20],
            [2, 14, 3],
        ],
        marker: {
            fillColor: "#42aaf5"
        }
    }]

    };
    const areaChart = {
      chart: {
        type: 'area'
      },
      accessibility: {
        description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
      },
      title: {
        text: 'Voting time distribution'
      },
      // subtitle: {
      //   text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
      //     'target="_blank">FAS</a>'
      // },
      xAxis: {
        allowDecimals: false,
        accessibility: {
          rangeDescription: 'Voting Date'
        }
      },
      yAxis: {
        title: {
          text: 'No. Tokens Voted'
        }
      },
      tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [{
        color: "#42f593",
        name: 'Upvote',
        data: [
          null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
          1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
          28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
          26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
          23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
          21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
          10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
          5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
          3750, 3708, 3708
        ]
      }, {
        name: 'Against',
        color: '#f5427b',
        data: [null, null, null, null, null, null, null, null, null,
          1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
          3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
          14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
          32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
          32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
          13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
          5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
          4310, 4495, 4477
        ]
      }]
    }
    const lineChart =  {

      title: {
          text: 'Voting timeline',
          align: 'left'
      },

      // subtitle: {
      //     text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
      //     align: 'left'
      // },

      yAxis: {
          title: {
              text: 'No. Tokens'
          }
      },

      xAxis: {
          accessibility: {
              rangeDescription: 'Date'
          }
      },

      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },

      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 2010
          }
      },

      series: [{
          name: 'Up Votes',
          data: [43934, 48656, 65165, 81827, 112143, 142383,
              171533, 165174, 155157, 161454, 154610]
      }, {
          name: 'Against Votes',
          data: [24916, 37941, 29742, 29851, 32490, 30282,
              38121, 36885, 33726, 34243, 31050]
      }, {
          name: 'Abstain Votes',
          data: [11744, 30000, 16005, 19771, 20185, 24377,
              32147, 30912, 29243, 29213, 25663]
      }],

      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }

    }
    Highcharts.chart('customChart', voteDistribution);
    // Highcharts.chart('scatterPlot', scatterPlot);
    // Highcharts.chart('areaChart', areaChart);
    // Highcharts.chart('lineChart', lineChart);

  }, []);

  /// calling data from the graph


// console.log(data)
// use state data




// useQuery("launches", () => {
//   console.log(request(endpoint, query_votes));
//   return request(endpoint, query_votes);
// });

if (!votesData) return "Loading...";
// if (votes_error) return <pre>{votes_error.message}</pre>;


  return (
    <>
      <div className="content">
        <Row id='row__toggle' >
        {/* <button className="dropdown-toggle" onClick={toggleDropdown}>
          Toggle Dropdown
        </button>
        <Dropdown show={isDropdownOpen}  alignright="true" style={{ width: '100%' }}>
          <Dropdown.Toggle  onClick={toggleDropdown} variant="success" id="dropdown-basic">
            Proposal: Id o Nombre de proposal Dropdown
          </Dropdown.Toggle>
          <Dropdown.Menu onSelect={handleDropdownProposalChange}>
            {proposals_data.map((proposal, index) => (
              <Dropdown.Item key={index} href={"#/"+proposal.id_proposal}>{proposal.description}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown> */}

        <select  aria-label="Default select example"
          variant="success" id="dropdown-basic"
          value={selectedProposal.id_proposal}
          className="dropdown-toggle form-select-propolal"
          onChange={handleDropdownProposalChange}
          style={{backgroundColor: "#2e65e6"}}
        >
          {proposals_data.map((proposal, index) => (
            <option key={index} value={proposal.id_proposal}>{proposal.id_proposal}. {proposal.description}</option>
          ))}

        </select>
        </Row>
          {/* <p>Selected Proposal: {selectedProposal.id_proposal}. {selectedProposal.description}</p> */}
          <br></br>
        <Row>

        <Col lg="2">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Participation Rate</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chat-33 text-info" /> 82.5%
                </CardTitle>
              </CardHeader>
              <CardHeader>
                <h5 className="card-category">Total Votes</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chat-33 text-info" /> 33
                </CardTitle>
              </CardHeader>

              <CardBody>
                {/* <div className="chart-area" id="customChart" style={{height: "400px"}}>

                </div> */}
              </CardBody>
            </Card>
          </Col>
        <Col lg="4">
            <Card className="card-chart">
              <CardBody>
                <div className="chart-area" id="customChart" style={{height: "400px"}}>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Description</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chat-33 text-info" /> Proposal: {selectedProposal.id_proposal}. {selectedProposal.description}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area"  style={{height: "310px"}}>
                    <strong>Proposer:</strong> {selectedProposal.proposer_wallet} <br/>
                    <strong>Quorum:</strong> {selectedProposal.Quorum} <br/>
                    <strong>Begin Date:</strong> {selectedProposal.beginDate} <br/>
                    <strong>End Date:</strong> {selectedProposal.endDate} <br/>
                    <div>
                      {loading && <strong>loading...</strong>}
                      {/* {error && <strong>Ups... Algo salió mal. {error.message}</strong>}
                      {data?.map((user, key) => (<strong key={key}>{user.proposalId}</strong>))} */}
                    </div>
                </div>
              </CardBody>
            </Card>
          </Col>

        </Row>




        <Row>
          <Col lg="12">
            <Card className="card-chart">
              {/* <CardHeader>
                <h5 className="card-category">title</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader> */}
              <CardBody style={{height: "500px"}}>
                <div className="chart-area">
                <div className="chart-area" id="scatterPlot" style={{height: "500px"}}></div>
                </div>
              </CardBody>
            </Card>
          </Col>

        </Row>




        <Row>
        <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Upvote</h6>
                <p className="card-category d-inline"> votes</p>


              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                  <thead className="text-primary">
                    <tr>
                      <th>Wallet</th>
                      <th>No. Tokens</th>
                      <th ></th>
                    </tr>
                  </thead>
                  <tbody>

                    {/* { VOTES DATA
                          "wallet": "0xABCDEF1234567890",
                          "vote": "for",
                          "reason": "I support the proposal for the community garden",
                          "voteDate": "2023-10-21",
                          "proposal_id": 1
                      }, */}
                      {votesData?.voteCasts.map((vote, index)=>(

                    <>
                    {vote.proposalId == selectedProposal.id_proposal && vote.support == 0 ?
                          (
                              <tr key={index}>
                                <td>{vote.voter}</td>
                                <td>{vote.weight}</td>
                                <td className="td-actions text-right"><Button color="link" id="tooltip636901683" title="" type="button">
                                      <i className="tim-icons icon-badge" />
                                    </Button></td>
                              </tr>
                          )
                          : (null)
                        }</>
                        ))
                      }



                  </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Against</h6>
                <p className="card-category d-inline"> votes</p>

              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                  <thead className="text-primary">
                    <tr>
                      <th>Wallet</th>
                      <th>No. Tokens</th>
                      <th ></th>
                    </tr>
                  </thead>
                  <tbody>
                  {votesData?.data?.voteCasts.map((vote, index)=>(
                        <>
                       {vote.proposalId == selectedProposal.id_proposal && vote.support == 0 ?
                          (
                              <tr key={index}>
                                <td>{vote.voter}</td>
                                <td>{vote.weight}</td>
                                <td className="td-actions text-right"><Button color="link" id="tooltip636901683" title="" type="button">
                                      <i className="tim-icons icon-badge" />
                                    </Button></td>
                              </tr>
                          )
                          : (null)
                        }</>
                        ))
                      }
                  </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          {/* <Col lg="4" md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Abstain</h6>
                <p className="card-category d-inline"> votes</p>

              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                  <thead className="text-primary">
                    <tr>
                      <th>Wallet</th>
                      <th>No. Tokens</th>

                      <th ></th>
                    </tr>
                  </thead>
                  <tbody>
                  {votes_results.map((vote, index)=>(
                        <>
                        {vote.proposal_id == selectedProposal.id_proposal &&  vote.vote == "abstain" ?
                          (
                              <tr key={index}>
                                <td>{vote.wallet}</td>
                                <td>{participant_data[vote.wallet]?.TokensNumber}</td>
                                <td className="td-actions text-right"><Button color="link" id="tooltip636901683" title="" type="button">
                                      <i className="tim-icons icon-badge" />
                                    </Button></td>
                              </tr>
                          )
                          : (null)
                        }</>
                        ))
                      }
                  </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col> */}

        </Row>



        <Row>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                {/* <h5 className="card-category">Votes / Time Distribution</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle> */}
              </CardHeader>
              <CardBody>
              <div className="chart-area" id="areaChart" style={{height: "500px"}}></div>

              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                {/* <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  3,500€
                </CardTitle> */}
              </CardHeader>
              <CardBody>
                <div className="chart-area" id="lineChart" style={{height: "500px"}}>

                </div>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    </>
  );
}

export default DashboardProposal;