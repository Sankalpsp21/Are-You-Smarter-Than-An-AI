import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { Text } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { GameSession } from "../models";
import { RootState } from "../redux/store";

export function Lobby() {
  // get values from redux
  const gameSessionID: string = useSelector(
    (state: RootState) => state.game.gameSessionID
  );
  const [playerCount, setPlayerCount] = useState<number>(0);

  useEffect(() => {
    const init = async () => {
      const gameSession = await DataStore.query(GameSession, gameSessionID);
      console.log(gameSession);

      if (gameSession == null) {
        return;
      }

      setPlayerCount(gameSession.playerCount);

      const subscription = DataStore.observe(
        GameSession,
        gameSessionID
      ).subscribe((msg) => {
        const item = msg.element;
        console.log(item);
        setPlayerCount(item.playerCount);

        if (item.roundNumber === 1) {
          // unsubscribe
          subscription.unsubscribe();

          window.location.href = "/prompt";
        }
      });
      console.log(subscription);
    };
    try {
      init();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <h1>ARE YOU SMARTER THAN AN AI?</h1>

      <Text
        marginBottom="1em"
        fontSize="1.2em"
        fontWeight="500"
        alignSelf="center"
      >
        Waiting for Host to Start...
      </Text>
      <Text
        marginBottom="2em"
        fontStyle="normal"
        textDecoration="none"
        alignSelf="center"
      >
        Players joined: {playerCount}
      </Text>

      <LoadingSpinner />
    </>
  );
}

export default Lobby;
function useSelector(arg0: (state: RootState) => any) {
  throw new Error("Function not implemented.");
}
