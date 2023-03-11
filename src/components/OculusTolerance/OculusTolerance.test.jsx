import * as React from 'react';
import { render, screen , cleanup } from '@testing-library/react';
import OculusTolerance from './OculusTolerance';


afterEach(cleanup);
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

describe('Test OculusTolerance component', () => {
    
    test('renders OculusTolerance with correct data', () => {
        
        render(<OculusTolerance jobData={JSON.stringify(jobData)}/>)

        // screen.debug();

        let parsedJSON = JSON.parse(JSON.stringify(jobData));
        const lmsRightSph = String(parsedJSON.data.lms.right.sph);
        const lmsRightCyl = String(parsedJSON.data.lms.right.cyl);
        const lmsRightAdd = String(parsedJSON.data.lms.right.add);
        const lmsRightAx = String(parsedJSON.data.lms.right.ax);
        
        const lmsLeftSph = String(parsedJSON.data.lms.left.sph);
        const lmsLeftCyl = String(parsedJSON.data.lms.left.cyl);
        const lmsLeftAdd = String(parsedJSON.data.lms.left.add);
        const lmsLeftAx = String(parsedJSON.data.lms.left.ax);
        // "sph": 6,
        // "cyl": 7,
        // "add": 8,
        // "ax": 9,
        //console.log('lmsRightSph : ' + lmsRightSph);
        // console.log('lmsRightCyl : ' + lmsRightCyl);
        // console.log('lmsRightAdd : ' + lmsRightAdd);
        // console.log('lmsRightAx : ' + lmsRightAx);

        // console.log('lmsLeftSph : ' + lmsLeftSph);
        // console.log('lmsLeftCyl : ' + lmsLeftCyl);
        // console.log('lmsLeftAdd : ' + lmsLeftAdd);
        // console.log('lmsLeftAx : ' + lmsLeftAx);

        //  const lmsRightSphX =  screen.getByText(/6/);
        //   console.log('lmsRightSphX : ' + lmsRightSphX.innerHTML); 
        //   console.log('lmsRightSph : ' + lmsRightSph);  
       // expect(lmsRightSphX.innerHTML).toContain(lmsRightSph);

        
        const sphereElement = screen.getByText('Sphere') 
       // console.log('sphereElement : ' + sphereElement.innerHTML);
        expect(screen.getByText('Sphere')).toBeInTheDocument();

        const cylinderElement = screen.getByText('Cylinder') 
       // console.log('cylinderElement : ' + cylinderElement.innerHTML);
        expect(screen.getByText('Cylinder')).toBeInTheDocument();
        
        const axisElement = screen.getByText('Axis') 
       // console.log('axisElement : ' + axisElement.innerHTML);
        expect(screen.getByText('Axis')).toBeInTheDocument();

        const additionElement = screen.getByText('Addition') 
       // console.log('additionElement : ' + additionElement.innerHTML);
        expect(screen.getByText('Addition')).toBeInTheDocument();

    });
});