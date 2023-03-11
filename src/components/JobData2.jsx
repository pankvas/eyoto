export const JobData = [
{
    "jobid": 99999,
    "status": "completed",
    "message": {
        "id": "text.id.string",
        "texten": "English descriptor",
        "textlocale": "Descriptor in local language"
    },
    "progress": 99,
    "result": {
        "overall": "pass | fail",
        "surface": "pass | fail",
        "prescription": "pass | fail"
    },
    "data": {
        "measure": {
            "left": {
                "sph": 1,
                "cyl": -3.00,
                "add": 0.3,
                "axis": 3,
                "prism": {
                    "up": 0.2,
                    "down": 0,
                    "in": 0,
                    "out": 0
                },
                "surface": {
                    "image": "/path-to-image/image-name"
                }
            },
            "right": {
                "sph": 1.99,
                "cyl": -3.50,
                "add": 1.10,
                "axis": 4,
                "prism": {
                    "up": 0,
                    "down": 0,
                    "in": 4,
                    "out": 0
                }, 
                "surface": {
                    "image": "/path-to-image/image-name"
                }
            },
            "common": {
                "combinedprism": {
                    "up": 33,
                    "down": 99.99,
                    "in": 66.66,
                    "out": 44 
                }
            }
        },
        "lms": {
            "left": {
                "sph": 99.99,
                "cyl": 99.99,
                "add": 99.99,
                "axis": 99.99,
                "prism": {
                    "up": .1,
                    "down":0,
                    "in": 99.99,
                    "out": 0 
                }
            },
            "right": {
                "sph": 99.99,
                "cyl": 99.99,
                "add": 99.99,
                "axis": 99.99,
                "prism": {
                    "up": 0,
                    "down": 0,
                    "in": 5,
                    "out": 0 
                }
            },
            "common": {
                "combinedprism": {
                    "up": 11,
                    "down": 99.99,
                    "in": 33.33,
                    "out": 22 
                }
            }
        },
        "tolerance": {
            "left": {
                "sph": 0.01,
                "cyl": 3.00,
                "add": 0.13,
                "axis": 0.8,
                "prism": {
                    "up": 0,
                    "down": 99.99,
                    "in": 99.99,
                    "out": 0 
                },
                "surface": {
                    "microns": 40
                }
            },
            "right": {
                "sph": 2.6,
                "cyl": 3.00,
                "add": 0.13,
                "axis": 3.6,
                "prism": {
                    "up": 0,
                    "down": 4,
                    "in": 6,
                    "out": 0 
                },
                "surface": {
                    "microns": 40
                }
            },
            "common": {
                "combinedprism": {
                    "up": 0,
                    "down": 99.99,
                    "in": 99.99,
                    "out": 0 
                }
            }
        },
        "result": {
            "left": {
                "sph": "pass | fail",
                "cyl": "pass | fail",
                "add": "pass | fail",
                "axis": "pass | fail",
                "prism": "pass | fail",
                "surface": {
                    "result": "pass | fail",
                    "imageurl": "[path to surface scan image]"
                }
             },
            "right": {
                "sph": "pass | fail",
                "cyl": "pass | fail",
                "add": "pass | fail",
                "axis": "pass | fail",
                "prism": "pass | fail",
                "surface": {
                    "result": "pass | fail",
                    "imageurl": "[path to surface scan image]"
                }
            },
            "common": {
                "combinedprism": "fail"
            }
        }
    }
}
]