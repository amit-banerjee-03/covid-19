export default function callApi(url, componentObj, successCallBack, successParameter, errorCallBack, errorParameter){
    fetch(url)
          .then(res => res.json())
          .then((result) => {
                if(successParameter!=null && typeof successParameter!="undefined"){
                    successCallBack(result, successParameter);
                }else{
                    successCallBack();
                }
                componentObj.setState({status:'SUCCESS'});
                },
            (error) => {
                if(errorParameter!=null && typeof errorParameter!="undefined"){
                   errorCallBack(errorParameter);
                }else{
                    errorCallBack()
                }
                componentObj.setState({status:'ERROR', error:error})
            })
}