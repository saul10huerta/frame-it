import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ITEM } from '../../utils/mutations';

const ItemForm = () => {

    // const [addItem, { error }] = useMutation(ADD_ITEM, {
    //     update(cache, { data: { addItem } }) {
    //         try {
    //             const { items } = cache.read
    //         }
    //     }
    // })


    return (
    <div>
      <form 
        className="flex-row justify-center justify-space-between-md align-stretch"
        // onSubmit={handleFormSubmit}
        >
        <textarea
          placeholder="Here's a new thought..."
          value='alskdf'
          className="form-input col-12 col-md-9"
        //   onChange=
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
    )

}

export default ItemForm;