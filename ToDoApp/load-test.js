import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10,          // number of users
  duration: '1m',   // run for 1 minute
};

const BASE_URL = 'http://apiapp:80/api/todo'; // your API container name

export default function () {
  // GET request
  let res1 = http.get(BASE_URL);
  check(res1, {
    'GET success': (r) => r.status === 200,
  });

  // POST request
  let payload = JSON.stringify({
    name: 'Task ' + Math.random(),
  });

  let params = {
    headers: { 'Content-Type': 'application/json' },
  };

  let res2 = http.post(BASE_URL, payload, params);
  check(res2, {
    'POST success': (r) => r.status === 200 || r.status === 201,
  });

  sleep(1);
}