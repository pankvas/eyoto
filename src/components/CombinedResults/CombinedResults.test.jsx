import * as React from 'react';
import { render, screen , cleanup } from '@testing-library/react';
import renderer  from 'react-test-renderer';
import CombinedResults from './CombinedResults';
import App from '../../App';

afterEach(cleanup);

describe('Test CombinedResults component', () => {   
    
    test('CombinedResults snapshot test', () =>{
        const component = renderer.create(<App><CombinedResults /> </App>); //variable to hold complete UI
        const tree = component.toJSON(); //passing it to a tree variable which will render as JSON
        expect(tree).toMatchSnapshot(); //then the JSON will be tested against what we have in snapshot
      })
      

    test('renders Combined as a text', () => {
        const jobData = {    
            "jobid": 99999,
            "status": "completed",
            "message": {
                "id": "text.id.string",
                "texten": "English descriptor",
                "textlocale": "Descriptor in local language"
            },
            "progress": 99,
            "data": {
                "measure": {
                    "left": {
                        "sph": 1,
                        "cyl": -5,
                        "add": 0.3,
                        "ax": 3,
                        "prism": {
                            "up": -5,                    
                            "in": 3
                        },
                        "images": {
                            "surface": "/path-to-image/image-name"
                        }
                    },
                    "right": {
                        "sph": 1.99,
                        "cyl": -3.50,
                        "add": 1.10,
                        "ax": 4,
                        "prism": {
                            "up": -2,
                            "in": -4
                        },
                        "images": {
                            "surface": "/path-to-image/image-name"
                        }
                    },
                    "common": {
        
                        "combinedprism": {
                            "up": 2.5,
                            "in": 6.6
                        }
                    }
                },
                "lms": {
                    "left": {
                        "sph": 4,
                        "cyl": 6,
                        "add": 2,
                        "ax": 1,
                        "prism": {
                            "up": 3,
                            "in": 6
                        }
                    },
                    "right": {
                        "sph": 6,
                        "cyl": 7,
                        "add": 8,
                        "ax": 9,
                        "prism": {
                            "up": 1,
                            "in": 5
                        }
                    },
                    "common": {
                        "combinedprism": {
                            "up": 11,
                            "in": 33.33
                        }
                    }
                },
                "tolerance": {
                    "standard" : {
                        "type" : "ANSI | ISO",
                        "source" : "PORTAL | DEFAULT"
                    },
                    "left": {
                        "sph": 0.01,
                        "cyl": 3.00,
                        "add": 0.13,
                        "ax": 0.8,
                        "prism": {
                            "up": 0,
                            "in": 9.99
                        },
                        "surface": {
                            "microns": 40
                        }
                    },
                    "right": {
                        "sph": 2.6,
                        "cyl": 3.00,
                        "add": 0.13,
                        "ax": 3.6,
                        "prism": {
                            "up": 0,
                            "in": 6
                        },
                        "surface": {
                            "microns": 40
                        }
                    },
                    "common": {
                        "combinedprism": {
                            "up": 0,
                            "in": 99.99
                        }
                    }
                },
                "result": {
                    "common": {
                        "overall": "pass",
                        "surface": "fail",
                        "prescription": "pass",
                        "combinedprism": "pass"
                    },
                    "left": {
                        "sph": "fail",
                        "cyl": "pass",
                        "add": "warning",
                        "ax": "fail",
                        "prism": "warning",
                        "surface": "pass | fail"
                        },
                    "right": {
                        "sph": "warning",
                        "cyl": "warning",
                        "add": "fail",
                        "ax": "pass",
                        "prism": "pass",
                        "surface": "pass"
                    }
                }
            }
        };   

        render(<CombinedResults jobData={JSON.stringify(jobData)}/>)
        //screen.debug();

        let parsedJSON = JSON.parse(JSON.stringify(jobData));
        const expectedCombinedPrismUP = String(parsedJSON.data.lms.common.combinedprism.up);
        const expectedCombinedPrismIN = String(parsedJSON.data.lms.common.combinedprism.in);
        const measuredCombinedPrismUP = String(parsedJSON.data.measure.common.combinedprism.up);
        const measuredCombinedPrismIN = String(parsedJSON.data.measure.common.combinedprism.in);
        //resultCombinedPrism = parsedJSON.data.result.common.combinedprism;

        const textElement = screen.getByText('Combined') 
        //console.log('textElement : ' + textElement.innerHTML)
        expect(screen.getByText('Combined')).toBeInTheDocument();

        const expectedElement = screen.getByText('Expected') 
        //console.log('expectedElement : ' + expectedElement.innerHTML)
        expect(screen.getByText('Expected')).toBeInTheDocument();
        
        const measuredElement = screen.getByText('Measured') 
        //console.log('measuredElement : ' + measuredElement.innerHTML)
        expect(screen.getByText('Measured')).toBeInTheDocument();


        const imgElement = screen.getByRole('img'); 
        expect(imgElement.src).toContain('http://localhost/combinedResultIndicatorPass.png');
            
        // succeeds
        expect(screen.getByText('Combined')).toBeInTheDocument();

        // succeeds
        expect(screen.getByText(/ombine/)).toBeInTheDocument();


        //expectedCombinedPrismUP  11
        const expectedCombinedPrismUPX = screen.getByText(/11/) ;
        // console.log('expectedCombinedPrismUPX : ' + expectedCombinedPrismUPX.innerHTML); //expectedCombinedPrismUPX : 11 UP
        // console.log('expectedCombinedPrismUP : ' + expectedCombinedPrismUP); // expectedCombinedPrismUP : 11
        expect(expectedCombinedPrismUPX.innerHTML).toContain(expectedCombinedPrismUP);

        // expectedCombinedPrismIN 33.33
        const expectedCombinedPrismINX = screen.getByText(/33.33/);
        // console.log('expectedCombinedPrismINX : ' + expectedCombinedPrismINX.innerHTML);
        // console.log('expectedCombinedPrismIN : ' + expectedCombinedPrismIN);
        expect(expectedCombinedPrismINX.innerHTML).toContain(expectedCombinedPrismIN);

        // measuredCombinedPrismUP 2.5
        const measuredCombinedPrismUPX = screen.getByText(/2.5/);
        // console.log('measuredCombinedPrismUPX : ' + measuredCombinedPrismUPX.innerHTML);
        // console.log('measuredCombinedPrismUP : ' + measuredCombinedPrismUP);
        expect(measuredCombinedPrismUPX.innerHTML).toContain(measuredCombinedPrismUP);

        // measuredCombinedPrismIN 6.6
        const measuredCombinedPrismINX = screen.getByText(/6.6/);
        // console.log('measuredCombinedPrismINX : ' + measuredCombinedPrismINX.innerHTML);
        // console.log('measuredCombinedPrismIN : ' + measuredCombinedPrismIN);
        expect(measuredCombinedPrismINX.innerHTML).toContain(measuredCombinedPrismIN);
    });    
});
