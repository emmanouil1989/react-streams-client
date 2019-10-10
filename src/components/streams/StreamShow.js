import React from 'react'
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/index'

class StreamShow extends React.Component{

    componentDidMount() {
        const {getStream, match:{params:{id}}} = this.props;
        getStream(id);
    }

    render(){
        const{stream} = this.props;
        if(!stream){
            return <div>Loading...</div>
        }
        const {stream: {title,description}}=this.props;

        return(
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) =>{
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};
// connect where mapToStateToPros is used to get the saved stream from the store. 2) map dispatch to props is an object of actions which they are getting dispatch to fetch a specific stream.
export default connect(mapStateToProps,{
     getStream: fetchStream
})(StreamShow);
