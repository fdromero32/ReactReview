function wordCount: challenge => getting the textarea to only count the number of words in a string.

function reset: challenge => added && operators which did not reset the number of words or the number. But its like setState. You wouldnt have that with and operators, you'd just do another setState to update the corresponding state you were targeting. useRef to focus on textarea. Challenge: disabling the disbale property to allow inputRef to work.

function endGame: challenge => Remove from end condition and put it into an individual function. This allows for adding more stuff later on if necessary.

useEffect: challenges => trying to understand how to use useEffect correctly. So far so good. Just messed up assigned a value at first. Check state of game in the useEffect array. getting the word count was a challenge. Had to introduce a new state for that number and then use the countWords method to assign it that value.

disabling button/textarea: challenge => making  button and textarea disabled depending on the status of gameMode state.