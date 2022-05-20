import { connect } from "react-redux";
import newsActionCreator from "./newsActionCreator";
import News from "./News";

const mapStateToProps = (state) => ({
    searchData: state&&state.searchData?state.searchData:'',
});

const mapDispatchToProps = (dispatch) => ({
    setSearchData : (data) => dispatch(newsActionCreator.search(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);