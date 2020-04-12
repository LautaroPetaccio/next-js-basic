function Index({ news }) {
  return (
    <div>
      <div>
        { news.map(news => <div><p>{news.title}</p><p>{news.link}</p></div>) }
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  // const root = req ? `http://${req.headers.host}` : ''
  // const stats = await fetch(root + '/api/stats').then(res => res.json())
  // const history = await fetch(root + '/api/history').then(res => res.json())
  return { props:
    {
      news: [
        { title: "aTitle", link: "aLink", newsPageLogo: "aLogo" },
        { title: "anotherTitle", link: "anotherLink", newsPageLogo: "anotherLogo"}
      ]
    }
  };
}

export default Index;