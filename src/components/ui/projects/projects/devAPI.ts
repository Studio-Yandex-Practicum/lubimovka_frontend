class devApi {
  #dataSrc;

  constructor(dataSrc: string) {
    this.#dataSrc = dataSrc;
  }

  getProjects() {
    return fetch(this.#dataSrc, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      });
  }
}

export default new devApi('http://rtcam.ru:3001/projects');
