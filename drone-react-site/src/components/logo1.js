/* CSS for animating all propellers with a single keyframes definition */
@keyframes spinPropeller {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  #prop1,
  #prop2,
  #prop3,
  #prop4 {
    animation: spinPropeller 2s linear infinite; /* Adjust the duration as needed */
  }
  