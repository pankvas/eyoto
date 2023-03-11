import React from 'react';
import {getByRole, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PopupModal from './PopupModal';
    
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

describe('PopupModal', () => {
    test('renders image inside the modal', () => {
    
        render(<PopupModal jobData={JSON.stringify(jobData)} eye={'OD'} />);
       // screen.debug();
        const imageElement = screen.getByRole('img');
        expect(imageElement).toBeInTheDocument();
    });

    test('renders popup after clicking on the image onClick event', () => {
        
        render(<PopupModal jobData={JSON.stringify(jobData)} eye={'OD'} />);
        
        const imageElement = screen.getByRole('img');
        userEvent.click(imageElement);
        
        expect(imageElement).toBeInTheDocument();
       // screen.debug();

        const closeButtonElement = screen.getByText('Close');
//        console.log('closeButtonElement : ' + closeButtonElement.innerHTML);
        expect( screen.getByText('Close')).toBeInTheDocument();

        const imageSelector = document.querySelector("img") ;
        //console.log(imageSelector.src);
        expect(imageSelector.src).toContain("measure.left.surface.scratch.blobs_0.bmp");

        const imageAlt = document.querySelector("#largeImage") ;
         //console.log(imageAlt.alt);
        expect(imageAlt.alt).toContain("no large image to display");
    });
});

