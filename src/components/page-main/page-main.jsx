import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { ADD_QUIZ } from '../../constants/actions';

import cn from '../../utils/cn';

import Header from './header/header';
import Quiz from './quiz/quiz';

@cn('page-main')
class PageMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizActive: false
        }
        this.expand.bind(this);
    }
    expand() {
        this.setState({quizActive: !this.state.quizActive}, () => {
            document.body.style.overflow = this.state.quizActive ? 'hidden' : 'auto';
        });
    }
    render(cn) {
        const quizes = this.props.quizes;
        const compQuiz = quizes.map((quiz, i) => <Quiz emitter={this.expand.bind(this)} key={i} quiz={quiz} />);
        return (
            <div className={ cn() }>
                <Header />
                <div className={ cn('quiz-grid') }>
                    { compQuiz }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        quizes: state.quizes
    }
}

/*function mapDispatchToProps(dispatch) {
    return bindActionCreators({action: SOME_ACTION_TYPE}, dispatch)
}*/

export default connect(mapStateToProps)(PageMain);