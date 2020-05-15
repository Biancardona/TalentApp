const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoic3F1YWQ0IiwibmFtZSI6InNxdWFkIGZvdXIiLCJwYXNzd29yZCI6bnVsbCwiQVBJX1RJTUUiOjE1ODk0Njg2Mjh9.u__YkhNdmlvnRUj_qwG9UJJK2BV-rxpYsqd34m73XZQ";
//const cubosApiUrl = "https://cubosv2.4040.wtf/api/";
const tasksEndpoint = "https://cubosv2.4040.wtf/api/tasks/";
const staffsEndpoint = "https://cubosv2.4040.wtf/api/staffs/";
const staffsEndpointSearch = "https://cubosv2.4040.wtf/api/staffs/search/";
const projectsEndpoint = "https://cubosv2.4040.wtf/api/projects/";
const allTasksEndpoint = "https://cubosv2.4040.wtf/api/tasks/search/?keysearch=";

async function getTasks(taskId) {
    const response = await fetch(tasksEndpoint + taskId, {
        method: "GET",
        headers: {
            authToken: token,
        },
    });
    return response.json();
}

async function getStaffs(staffId) {
    const response = await fetch(staffsEndpoint + staffId, {
        method: "GET",
        headers: {
            authToken: token,
        },
    });
    return response.json();
}



async function getProjects(projectsId) {
    const response = await fetch(projectsEndpoint + projectsId, {
        method: "GET",
        headers: {
            authToken: token,
        },
    });
    return response.json();
}

async function allTasks() {
    const response = await fetch(allTasksEndpoint, {
        method: "GET",
        headers: {
            authToken: token,
        },
    });
    return response.json();
}
async function updateTimesheet(taskId, timeSheet) {
    const response = await fetch(tasksEndpoint + taskId, {
        method: "PUT",
        headers: {
            authToken: token,
        },
        body: {
            "id": `${taskId}`,
            "startdate": "1581919957",
            "timesheets": [
                {
                    "id": "3",
                    "note": "bianca_test",
                    "start_time": `${timeSheet.start_time}`,
                    "end_time": `${timeSheet.end_time}`,
                    "task_id": "1",
                    "staff_id": "1",
                    "full_name": "Gabriela J",
                    "time_spent": `${timeSheet.time_spent}`
                }
            ]
        }
    });
    return response.json();
}


export { getStaffs, getProjects, getTasks, allTasks, updateTimesheet };

