import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {
    Step,
    Stepper,
    StepLabel,
  } from 'material-ui/Stepper';

import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';

import {selectUser} from '../actions/index'
import strings from '../../../utils/constants';

/**
 * Global style constants
 */
const styles = {
    block: {
      maxWidth: 250,
    },
    checkbox: {
      marginBottom: 16,
    },
  };

/**
 * @description Main components of our app. Rrenders questions and all processing done here
 * @author Suhas R More
 * @class Test
 * @extends {Component}
 */
class Test extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            activeQno : 1,
            checked: false,
            finished: false,
            stepIndex: 0,
            selectedAns:1,
            correct: 0,
            wrong: 0,
            optionSelected: null,
            
        }
    }
    /**
     * @description Handels click of Next buttons. checks whether selected options is write or wrong and accordingly
     * inctement state count to show on Result page
     * @author Suhas R More
     * @memberof Test
     */
    handleNext() {
        const stepIndex = this.state.activeQno;
        console.log("correct",this.state.selectedAns,this.props.questions[stepIndex]);
        
        this.setState({
          finished: stepIndex >= this.props.questions.length,
          activeQno: stepIndex + 1
        },() => {
          
            if(this.state.selectedAns == this.props.questions[stepIndex-1].ans && !this.state.finished){
          
                this.setState({
                    correct: this.state.correct + 1,
                    optionSelected:null,
                })
          
                console.log("correct");
            
            } else {
          
                console.log("wrong");
                this.setState({
                    wrong: this.state.wrong + 1,
                    optionSelected:null,
                })
            }

        });
    };

    /**
     * @description Handles click of Back click. checks whether this is first q or not if yes disables click of back
     * @author Suhas R More
     * @memberof Test
     */
    handlePrev () {
       
        if (this.state.activeQno > 0) {
            
            this.setState({
                activeQno: this.state.activeQno - 1,
                
            });
        }
    };

    /**
     * @description handle click of Radio button. If option is not selected next click is disabled
     * @author Suhas R More
     * @param {any} e 
     * @param {any} v 
     * @memberof Test
     */
    setAnswer(e,v){
       
        this.setState({
           selectedAns: v,
           optionSelected:true,
       })

    }

    /**
     * @description renders active qestion along with options depending on next and back click
     * @author Suhas R More
     * @returns 
     * @memberof Test
     */
    renderActiveQestion() {
        /**
         * Style for Question container div
         */
        const style = {
            paddingLeft: "20%",
            paddingRight: "20%",
            paddingTop:"2%"
        }

        return this.props.questions.map((question) => {

           if(this.state.activeQno == question.id){
                return (
                    <div style={style} key={question.id}>
        
                        <Card key={question.id} zDepth={3}>
                            <CardTitle title={question.q}  />
                            <CardText>
                            <RadioButtonGroup name="shipSpeed" onChange={this.setAnswer.bind(this)} >
                                
                                {/* renders all option of active question*/}
                                {question.opt.map((o) =>{
                                    return(
                                        <RadioButton
                                        key={o.id}
                                        value={o.id}
                                        label={o.opt}
                                     
                                      />
                                        
                                    );
                                })}
                            </RadioButtonGroup>    
                            </CardText>
                        </Card>       
        
                    </div>
                );
            } 
            
        });
    } 
    
    render() {
        
        const stepIndex = this.state.activeQno-1;
        
        const style = {
            paddingLeft: "45%",
            paddingRight: "25%"
        }
        
        const stepperStyle = {
            paddingRight:"20%",
            paddingLeft:"20%",
           
        }
        
        const PaperStyle = {
            height: 65,
            fontWeight: "900",
            fontSize: "40px",
            width: "95%",
            margin: 20,
            backgroundColor:"#009A81",
            color:"#ffff",
            padding:10,
            textAlign: 'center',
            display: 'inline-block',
          };
        
        {/* if test is not yet fineshed we'll show question according to active qestion no else we'll show result page to the user*/}
        
        if(!this.state.finished){
        
            return (
                <div>
                    <div>
                        <Paper style={PaperStyle} zDepth={3} >
                            {strings.header}
                        </Paper>
                    </div>
                    
                    {this.renderActiveQestion()}
                    
                    <div style={stepperStyle}>
                        <Stepper activeStep={stepIndex}>
                            
                            {
                                this.props.questions.map((Q)=>{
            
                                    return(
                                        <Step key={Q.id}>
                                            <StepLabel>{strings.questions} {Q.id}</StepLabel>
                                        </Step>
                                    );
                                })
                            }
                            
                        </Stepper>

                    </div>

                    <div style={style}>
                        <div style={{marginTop: 12}}>
                            
                            <RaisedButton
                                label={strings.pre}
                                icon={<ArrowBack/>}
                                disabled={stepIndex === 0}
                                onClick={this.handlePrev.bind(this)}
                                style={{marginRight: 20}}
                                secondary={true}
                            />
                            
                            <RaisedButton
                                label={this.state.activeQno == this.props.questions.length ? strings.finish : strings.next}
                                primary={true}
                                disabled={this.state.optionSelected == null? true:false}
                                labelPosition="before"
                                onClick={this.handleNext.bind(this)}
                                icon={<ArrowForward/>}
                            />

                        </div>
                    </div>
                </div>   
            );

        } else {
            
            return(
            
                <div style={stepperStyle}>
                    
                    <Card >
                        <CardTitle title={strings.finishMsg}  />    
                        <CardText>          
                            {strings.correct}  {this.state.correct}<br/>
                            {strings.wrong}  {this.state.wrong}
                        </CardText>
                    
                    </Card>
                
                </div> 
            )
        }    
    }

}

function mapStateToProps(state) {
    return {
        questions: state.questions
    };
}


export default connect(mapStateToProps)(Test);
