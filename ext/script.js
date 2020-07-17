(async () => {
  try {
    const url = 'http://localhost:8080';
    const response = await fetch(url, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'omit',
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    });
    const result = await response.text();
    const {ok, status, type} = response;
    console.log({result, ok, status, type});
  } catch (error) {
    console.log({error});
  }
})();
