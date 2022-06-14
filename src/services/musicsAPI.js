const getMusics = async (id) => {
  try {
    const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
    const requestJson = await request.json();
    return requestJson.results;
  } catch (error) {
    alert('There was an error getting album information')
    return 'error';
  }
};

export default getMusics;
