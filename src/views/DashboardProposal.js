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
import Highcharts from 'highcharts';

import DarkUnica from 'highcharts/themes/high-contrast-dark';

// import HighchartsReact from 'highcharts-react-official';




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
import HC_more from 'highcharts/highcharts-more' //module
HC_more(Highcharts) //init module
DarkUnica(Highcharts);



function DashboardProposal(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  useEffect(() => {


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
        accessibility: {
            rangeDescription: 'DAO Member Since'
        }
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
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
    Highcharts.chart('scatterPlot', scatterPlot);
    Highcharts.chart('areaChart', areaChart);
    Highcharts.chart('lineChart', lineChart);

  }, []);


  return (
    <>
      <div className="content">


        <Row>
        {/* <button className="dropdown-toggle" onClick={toggleDropdown}>
          Toggle Dropdown
        </button> */}
        <Dropdown show={isDropdownOpen}  alignright="true" style={{ width: '100%' }}>
          <Dropdown.Toggle  onClick={toggleDropdown} variant="success" id="dropdown-basic">
            Proposal: Id o Nombre de proposal Dropdown
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Proposal 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Proposal 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Proposal 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Row>
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
              {/* <CardHeader>
                <h5 className="card-category">Total Votes</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chat-33 text-info" /> 33
                </CardTitle>
              </CardHeader> */}
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
                  <i className="tim-icons icon-chat-33 text-info" /> Proposal: Name
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area"  style={{height: "310px"}}>
                    Proposer: Ox003424fadsfewrwqewfdsa <br/>
                    This is the proposal description
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
        <Col lg="4" md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Upvote</h6>
                <p className="card-category d-inline"> votes</p>
                {/* <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
                    data-toggle="dropdown"
                    type="button"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
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
                    <tr>
                      <td>Oxdtdkj</td>
                      <td>33</td>
                      <td className="td-actions text-right"><Button color="link" id="tooltip636901683" title="" type="button">
                            <i className="tim-icons icon-badge" />
                          </Button></td>
                    </tr>
                  </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="12">
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
                    <tr>
                      <td>Oxdtdkj</td>
                      <td>33</td>
                      <td className="td-actions text-right"><Button color="link" id="tooltip636901683" title="" type="button">
                            <i className="tim-icons icon-badge" />
                          </Button></td>
                    </tr>
                  </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="12">
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
                    <tr>
                      <td>Oxdtdkj</td>
                      <td>33</td>
                     
                      <td className="td-actions text-right"><Button color="link" id="tooltip636901683" title="" type="button">
                            <i className="tim-icons icon-badge" />
                          </Button></td>
                    </tr>
                  </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          
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