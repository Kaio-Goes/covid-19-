import React, {Component} from 'react'
import {
    View,
    UIManager,
    Animated,
    PanResponder,
    Dimensions,
    LayoutAnimation,
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURANTION = 250;
export default class Deck extends Component {
    static defaultProps = {
        onSwipeRight: () => {},
        onSwipeLeft: () => {},
    };

    constructor( props) {
        super(props);

        const position =  new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({
                    x: gesture.dx, y:gesture.dy});
                },
            onPanResponderRelease: (event, gesture) => {
                if(gesture.dx > SWIPE_THRESHOLD){
                    this.forceSwipe("right")
                } else if (gesture.dx < -SWIPE_THRESHOLD){
                    this.forceSwipe("left")
                } else {
                    this.resetPosition();
                }
            } ,
        });
        this.state = {panResponder, position, index: 0};
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.data !== this.props.data){
            this.setState({index:0});
        }
    }
    UNSAFE_componentWillUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }
    forceSwipe(direction) {
        const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.position, {
            useNativeDriver: false, 
            toValue: {x, y: 0},
            duration: SWIPE_OUT_DURANTION,
        }).start(() => this.onSwipeComplete(direction));
    }

    onSwipeComplete(direction){
        const {onSwipeLeft, onSwipeRight, data} = this.props;
        const item = data[this.state.index];

        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
        this.state.position.setValue({x:0 , y: 0})
        this.setState({index: this.state.index+1})
    }

    resetPosition(){
        Animated.spring(
        this.state.position,{
            useNativeDriver: false,
            toValue: {x: 0, y: 0},
        }).start();
    }
    
    getCardStyle() {
        const {position} = this.state;
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5], 
            outputRange: ["-120deg", "0deg", "120deg"]
        });
        return {
            ...position.getLayout(),
            transform: [{rotate}]
        }
    }

    renderCards(){
        if(this.state.index >= this.props.data.length){
            return this.props.renderNoMoreCards();
        }
        return this.props.data
            .map((item,  i) => {
                if(i < this.state.index){
                    return null
                }
                if (i === this.state.index) {
                    return (
                        <Animated.View
                            key={item.id}
                            style={[
                                this.getCardStyle(),
                                styles.cardStyle,
                                { zIndex: 99},
                            ]}
                            {...this.state.panResponder.panHandlers}
                        >
                            {this.props.renderCard(item)}
                        </Animated.View>
                    );
                }
                return(
                    <Animated.View key={item.id} 
                    style={[styles.cardStyle]}>
                        {this.props.renderCard(item)}
                    </Animated.View>
                );
            }).reverse();
    }

    render(){
        return(
            <View>
                {this.renderCards()}
            </View>
        )
    }
}

const styles = {
    cardStyle: {
        position: "absolute",
        width: SCREEN_WIDTH,
        
    }
}