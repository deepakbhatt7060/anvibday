import React,{useState,useEffect} from "react";
const Truth=()=>{
   const questions=[
    "Do you have any hidden talents?",
"What's the most embarrassing thing you've ever done in front of a crush?",
"What's the last thing you searched for on your phone?",
"What's the longest you've gone without brushing your teeth?",
"What's the most childish thing you still do?",
"What's the most embarrassing thing your parents have caught you doing?",
"If you could switch lives with anyone for a day, who would it be and why?",
"What's the most embarrassing text you've ever sent?",
"Have you ever pretended to like a gift you didn't actually like?",
"What's the weirdest dream you've ever had?",
"What's the grossest thing you've ever eaten?",
"What's the most trouble you've ever gotten into at school?",
"What's the last thing you do before you go to bed?",
"Have you ever lied about your age?",
"What's the most embarrassing nickname you've ever had?",
"If you could erase one thing from your memory, what would it be?",
"What's the worst lie you've ever told?",
"What's the silliest reason you've ever cried?",
"What's the worst haircut you've ever had?",
"What's the most embarrassing song on your playlist?",
"What's the weirdest thing you've ever done in the bathroom?",
"Have you ever snuck out of the house?",
"What's the grossest thing you've ever done?",
"What's the most embarrassing thing that's ever happened to you in public?",
"If you could only eat one food for the rest of your life, what would it be?",
"What's the strangest thing you've ever done in your sleep?",
"What's the biggest secret you've ever kept from your parents?",
"Have you ever cheated on a test?",
"What's the most embarrassing thing you've ever worn?",
"What's the weirdest thing you've ever searched for on the internet?",
"What's the most embarrassing thing you've ever done in front of your crush?",
"If you could be any animal for a day, what would you be and why?",
"Have you ever stolen anything?",
"What's the most embarrassing thing that's ever happened to you on a date?",
"Have you ever peed in a pool?",
"What's the most embarrassing thing you've ever posted on social media?",
"If you could switch bodies with anyone in the room, who would it be?",
"What's the weirdest dream you've ever had about someone in this room?",
"What's the grossest thing you've ever done in front of someone?",
"What's the most embarrassing thing you've ever done at a sleepover?",
"Have you ever had a crush on a teacher?",
"What's the most embarrassing thing you've ever done at school?",
"What's the grossest thing you've ever eaten in front of someone?",
"What's the most embarrassing thing your parents have ever done in front of your friends?",
"Have you ever accidentally sent a text to the wrong person?",
"What's the most embarrassing thing you've ever said to your crush?",
"What's the weirdest thing you've ever done when you were alone?",
"What's the grossest thing you've ever done in public?",
"What's the most embarrassing thing you've ever done at a party?",
"Have you ever had a crush on a cartoon character?",
"What's the weirdest thing you've ever done in front of a mirror?",
"What's the grossest thing you've ever done in front of your crush?",
"Have you ever laughed so hard you peed your pants?",
"What's the most embarrassing thing you've ever done on a video call?",
"Have you ever walked in on someone in the bathroom?",
"What's the grossest thing you've ever done in the kitchen?",
"What's the most embarrassing thing you've ever done on a date?",
"Have you ever worn the same underwear two days in a row?",
"What's the weirdest thing you've ever done while driving?",
"What's the grossest thing you've ever done in the car?",
"What's the most embarrassing thing you've ever done in front of your boss?",
"Have you ever accidentally farted in public?",
"What's the grossest thing you've ever eaten for breakfast?",
"What's the most embarrassing thing you've ever done while drunk?",
"What's the weirdest thing you've ever done in front of a stranger?",
"What's the grossest thing you've ever done in the bathroom?",
"Have you ever used someone else's toothbrush without telling them?",
"What's the most embarrassing thing you've ever done on a plane?",
"Have you ever had a crush on someone in this room?",
"What's the grossest thing you've ever eaten in front of your parents?",
"What's the most embarrassing thing you've ever done in front of your grandparents?",
"Have you ever had a crush on a friend's sibling?",
"What's the grossest thing you've ever eaten at a restaurant?",
"What's the most embarrassing thing you've ever done in front of a celebrity?",
"Have you ever had a crush on a teacher?",
"What's the grossest thing you've ever eaten in front of your crush?",
"What's the most embarrassing thing you've ever done in front of your crush's parents?",
"Have you ever had a crush on a cartoon character?",
"What's the grossest thing you've ever eaten at a party?",
"What's the most embarrassing thing you've ever done in front of your crush's friends?",
    "When was the last time you lied?",
    "When was the last time you cried?",
    "What's your biggest fear?",
    "What's your biggest fantasy?",
    "Who's the last person you searched on Instagram?",
    "What's the strangest thing you've ever eaten?",
    "What's your relationship dealbreaker?",
    "What's a secret you've never told anyone?",
    "Do you have a hidden talent?",
    "Who was your first celebrity crush?",
    "Have you ever cheated in an exam?",
    "If you were going to be on a reality TV show, which would it be?",
    "What's your biggest insecurity?",
    "What's the biggest mistake you've ever made?",
    "What's one thing you hate people knowing about you?",
    "What's the worst thing anyone's ever done to you?",
    "What's the best thing anyone's ever done for you?",
"What's your worst habit?",
"What's the biggest misconception about you?",
"What's one thing you wish people knew about you?",
"Why did your last relationship break down?",
"What's the best piece of advice you've been given?",
"What's the most you've spent on a night out?",
"Have you ever returned or re-gifted a present?",
"Do you have a favourite sibling?",
"What have you purchased that's been the biggest waste of money?",
"How would you rate your looks on a scale of 1 to 10?",
"What celebrity do you look up to?",
"If you could be one celebrity for a day, who would it be?",
"If you could do any job in the world, what would it be?",
"What's your dream life?",
"What do you value the most - money, fame, success, friends, family, etc?",
"What’s your biggest red flag?",
"What’s one movie you’re embarrassed to admit you enjoy?",
"What music artist do you secretly think is overrated?",
"What’s your most controversial political opinion?",
"Name something you can’t live without.",
"Where do you think you’ll be in five years time?",
"How well do you think you’d do in a horror movie?",
"How many stuffed animals do you own?",
"Did you ever get in trouble at school? And if so what for?",
"Do you have any phobias?",
"Where's the weirdest place you peed?",
"Have you ever peed in the shower?",
"What's the strangest dream you've had?",
"Where's the weirdest place you've had sex?",
"What's one thing you only do when you're alone?",
"What's the strangest rumour you've heard about yourself?",
"What's your favourite gross food combination?",
"What's the weirdest lie you've ever told?",
"Do you have any fake social media accounts?",
"Have you ever peed in the pool?",
"What gives you the ick?",
"What's the weirdest thing you've ever eaten?",
"What is a weird food that you love?",
"What was your biggest childhood fear?",
"Did you ever have a crush on a teacher at school?",
"What’s the weirdest thing you’re obsessed with on TikTok?",
"What’s the most surprising thing your bag right now?",
"Who is your weird celebrity crush?",
"What’s the weirdest habit you have when you’re alone?",
"What's the worst thing you've ever done at work?",
"Do you have any fetishes?",
"What's something you're glad your family doesn't know about you?",
"Have you ever cheated on someone?",
"What's the worst thing you've ever done?",
"What are your thoughts on polyamory?",
"What's the worst intimate experience you've ever had?",
"What's the best intimate experience you've ever had?",
"Have you ever broken the law?",
"Have you ever stayed friends with someone because it benefitted you beyond just the friendship?",
"Who would you like to kiss in this room?",
"Have you ever had a run-in with the law?",
"What's the worst thing you've ever said to anyone?",
"Have you ever been caught doing something you shouldn't have?",
"What's the worst date you've been on?",
"What's the best date you've been on?",
"What happened on the latest night out you had?",
"What's your biggest regret?",
"Have you ever said something you regret about someone in this room?",
"Have you ever lied to get out of a bad date?",
"What's the most trouble you've been in?",
"When did you last have sex outside?",
"What's the worst thing you've lied about?",
"What's one thing you wish you'd lied about?",
"Name a time you think you were a bad partner",
"If you had to cut one friend out of your life, who would it be?",
"What's your guilty pleasure?",
"If you had to get back with an ex, who would you choose?",
"Do you have a favorite friend?",
"What's your biggest turn-on?",
"If you could swap lives with someone in this room, who would it be?",
"Have you ever told a lie about your BFF to make yourself look better?",
"Have you ever had a holiday romance?",
"Have you ever had a festival romance?",
"What is something you would do if you knew there were no consequences?",
"What’s your toxic trait?",
"Do you still have feelings for any of your exes?",
"What’s more important to you - love or money?",
"Who do you think should pay on a first date?",
"What nickname do you call your partner/they call you?"
   ];
   const [randomQuestion, setRandomQuestion] = useState('');

   useEffect(() => {
    getRandomQuestion();
  }, []); // Empty dependency array to run only once when the component mounts

  const getRandomQuestion = () => {
    if (questions.length === 0) {
      setRandomQuestion("All questions have been asked!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];
    const updatedQuestions = [...questions];
    updatedQuestions.splice(randomIndex, 1);

    setRandomQuestion(selectedQuestion);
  };

  return (
    <div>
      <p>{randomQuestion}</p>
    </div>
  );
};

export default Truth;