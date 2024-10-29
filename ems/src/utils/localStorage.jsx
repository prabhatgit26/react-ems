localStorage.clear();
const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Prepare Report",
                "description": "Prepare monthly sales report.",
                "date": "2024-10-30",
                "category": "Reports",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client Meeting",
                "description": "Meet with client to discuss project requirements.",
                "date": "2024-10-31",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Data Analysis",
                "description": "Analyze last quarter's performance data.",
                "date": "2024-11-01",
                "category": "Analysis",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "new": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Vivaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Design Mockups",
                "description": "Create UI mockups for the new project.",
                "date": "2024-10-30",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team Review",
                "description": "Review team's performance for the quarter.",
                "date": "2024-10-29",
                "category": "Review",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskCounts": {
            "active": 1,
            "new": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstName": "Aditya",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Code Refactoring",
                "description": "Improve code quality by refactoring old modules.",
                "date": "2024-10-28",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client Presentation",
                "description": "Present project updates to the client.",
                "date": "2024-10-30",
                "category": "Presentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Bug Fixing",
                "description": "Fix reported bugs from the last release.",
                "date": "2024-11-01",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "new": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Sai",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Inventory Check",
                "description": "Verify stock levels and update records.",
                "date": "2024-10-27",
                "category": "Inventory",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Supplier Coordination",
                "description": "Coordinate with suppliers for next order shipment.",
                "date": "2024-10-29",
                "category": "Logistics",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "new": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Ishaan",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Social Media Update",
                "description": "Post updates on the company’s social media pages.",
                "date": "2024-10-26",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Customer Feedback Analysis",
                "description": "Compile and analyze feedback from recent surveys.",
                "date": "2024-10-27",
                "category": "Analysis",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Website Content Update",
                "description": "Revise and update content on the website.",
                "date": "2024-11-01",
                "category": "Content",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "new": 1,
            "completed": 1,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@ems.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    //console.log('employees data & admin data : ',employees,admin);
    return {employees, admin};
}
