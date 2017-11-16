import reducers from '../reducers';

// made by redux broswer extension
test('SET_SEARCH_TERM', () => {
  const state = reducers({searchTerm:'',apiData:{}}, {type:'SET_SEARCH_TERM',payload:'black'});
  expect(state).toEqual({searchTerm:'black',apiData:{}});
});

test('reducers', () => {
  const state = reducers(
    {searchTerm:'',apiData:{}}, 
    {
      type:'ADD_API_DATA',
      payload:{rating:'1.7',
      title:'Stranger Things',
      year:'2016–',
      description:'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.',
      poster:'st.jpg',
      imdbID:'tt4574334',
      trailer:'9Egf5U8xLo8'
    }
  }
);
  expect(state).toEqual({
    searchTerm:'',
    apiData: { 
      tt4574334: {
        rating:'1.7',
        title:'Stranger Things',
        year:'2016–',
        description:'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.',
        poster:'st.jpg',
        imdbID:'tt4574334',
        trailer:'9Egf5U8xLo8'
      }
    }
  });
});
