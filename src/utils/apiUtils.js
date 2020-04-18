export default function callApi(url, componentObj, successCallBack, successParameter, errorCallBack, errorParameter) {
    fetch(url)
        .then(res => res.json())
        .then((result) => {
            if (successParameter != null && typeof successParameter != "undefined") {
                successCallBack(result, successParameter);
            } else {
                successCallBack(result);
            }
            componentObj.setState({ status: 'SUCCESS' });
        },
            (error) => {
                if (typeof errorCallBack != "undefined" && errorParameter != null && typeof errorParameter != "undefined") {
                    errorCallBack(errorParameter);
                } else if(typeof errorCallBack != "undefined"){
                    errorCallBack()
                }
                componentObj.setState({ status: 'ERROR', error: error })
            })
}