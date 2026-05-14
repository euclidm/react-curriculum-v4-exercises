import styles from './SnackForm.module.css';
import { useState, useEffect } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  // State Variables
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [touched, setTouched] = useState({name: false, rating: false});

  // Form Population Effect
  useEffect(()=>{
    if(editingSnack){
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    }
    else{
      setName("");
      setRating("");
    }

    setTouched({name:false, rating:false});
  }, [editingSnack]);

  // Validation 
  function validateName(){
    if (name.trim() === ""){
      return false;
    }
    else{
      return true;
    }
  }

  function validateRating(){
    if (rating.trim() === ""){
      return false;
    }
    else{
      return true;
    }
  }

  // Error Messages
  function getNameError(){
    if (touched.name && validateName() === false){
      return "Snack name is required!";
    }
  }

  function getRatingError(){
    if (touched.rating && validateRating() === false){
      return "Please select a rating!";
    }
  }

  const nameErrorMsg = getNameError();
  const ratingErrorMsg = getRatingError();

  const isEditing = Boolean(editingSnack);

  function handleSubmit(e) {
    e.preventDefault();

    if (validateName() === false || validateRating() ===false){
      setTouched({name:true, rating:true});

      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      setName("");
      setRating("");
      setTouched({name:false, rating:false});
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          className={styles['field-input']}
          placeholder="Enter snack name"
          // Handlers
          onChange={(event)=>setName(event.target.value)}
          onFocus={()=>setTouched(prev=>({...prev, name:true}))}
        />
        {nameErrorMsg && <div className={styles.error}>{nameErrorMsg}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
          // Handlers
          onChange={(event)=>setRating(event.target.value)}
          onFocus={()=>setTouched(prev=>({...prev, rating:true}))}
        />
        {ratingErrorMsg && <div className={styles.error}>{ratingErrorMsg}</div>}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
