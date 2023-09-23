import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { activeAction } from '../store/active-ui';
import { useParams } from 'react-router-dom';

const Empty = () => {
    const dispatch = useDispatch();
    const param = useParams()

    useEffect(() => {
        dispatch(activeAction.replaceActiveState(param.id))

        return (() => {
            dispatch(activeAction.replaceActiveState(10))
        })
    }, [])

    return (
        <div>
        </div>
    );
}

export default Empty;
