// import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// function ScrollToTop({ history }) {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0,0);
//     });
//     return () => {
//       unlisten();
//     }
//   }, []);

//   return (null);
// }

// export default withRouter(ScrollToTop);

import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'auto'

    //  });
  }, []);

  return null;
}

  export default withRouter(ScrollToTopOnMount);
