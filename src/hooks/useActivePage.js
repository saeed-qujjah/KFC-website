import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { activeAction } from "../store/active-ui";

export default function UseActivePage(page) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(activeAction.replaceActiveState(0))
    }, [])
}