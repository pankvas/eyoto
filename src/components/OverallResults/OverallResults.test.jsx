import * as React from 'react';
import data from '../../testData.json';
import { render, screen, cleanup } from '@testing-library/react';
import OverallResults from './OverallResults';

afterEach(cleanup);

describe('Test OverallResults component', () => {   
    
    test('renders text', () => {
        const jobData = {    
            "jobid": 12345,
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

        render(<OverallResults jobData={JSON.stringify(jobData)}/>)
        //screen.debug();
        let parsedJSON = JSON.parse(JSON.stringify(jobData));
       
        const testJobId = String(parsedJSON.jobid);        
        // console.log ("testJobId : " + testJobId);
        expect(testJobId).toContain('12345');
              
        const prescriptionStatus = String(parsedJSON.data.result.common.prescription);
        const surfaceStatus = String(parsedJSON.data.result.common.surface);
        const overallStatus = String(parsedJSON.data.result.common.overall);        
        // console.log('prescriptionStatus : ' + prescriptionStatus)       
        // console.log('surfaceStatus : ' + surfaceStatus)
        // console.log('overallStatus : ' + overallStatus)
        expect(prescriptionStatus).toMatch("pass");
        expect(surfaceStatus).toMatch("fail");
        expect(overallStatus).toMatch("pass");

        const prescriptionElement = screen.getByText('Prescription') 
        // console.log('prescriptionElement : ' + prescriptionElement.innerHTML)
        expect(screen.getByText('Prescription')).toBeInTheDocument();

        const surfaceElement = screen.getByText('Surface') 
       // console.log('surfaceElement : ' + surfaceElement.innerHTML)
        expect(screen.getByText('Surface')).toBeInTheDocument();
        
        const overallElement = screen.getByText('Overall') 
       // console.log('overallElement : ' + overallElement.innerHTML)
        expect(screen.getByText('Overall')).toBeInTheDocument();
    });
});
