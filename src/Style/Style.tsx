import styled from "@emotion/styled";

export const Wrapper = styled.div({
    margin: 'auto',
    width: '300px',
    height: '150px',
    marginTop: '2em',
    backgroundColor: '#ffffff',
    border: '1px solid #00000026',
    display: 'flex',
    flexFlow: "column wrap",
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow:'0px 4px 10px 4px #0000000c',
  });


  export const Button = styled.div({
    backgroundColor: "black",
    padding:"1em",
    color:"white",
    borderRadius: "0.4em"
  })

  export const Row = styled.div({
    maxHeight: "50px",
    margin: "5px",
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start'
  })


  export const PostWrapper = styled.div({
    margin: 'auto',
    width: 'fit-content',
    padding: '8px',
    marginTop: '2em',
    backgroundColor: '#ffffff',
    border: '1px solid #00000026',
    display: 'flex',
    flexFlow: "column wrap",
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxShadow:'0px 4px 10px 4px #0000000c',
    textAlign: 'initial'
  });




  export const PostsWrap = styled.div({
    margin: 'auto',
    maxWidth: '80%',
    padding: '8px',
    marginTop: '2em',
    backgroundColor: '#ffffff',
    border: '1px solid #00000026',
    display: 'flex',
    flexFlow: "column wrap",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    boxShadow:'0px 4px 10px 4px #0000000c',
    textAlign: 'initial'
  })