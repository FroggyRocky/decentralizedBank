import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Float "mo:base/Float";
import Time "mo:base/Time";
actor Dbank {

 stable var currentFunds:Float = 50;
   stable var time = Time.now();

  public func greet(name : Text) {
   Debug.print("Hello, " # name # "!");
  };

  public func topUp(amount:Float):async Float {
currentFunds +=  amount;
  Debug.print(debug_show(currentFunds));
  return currentFunds;
  };
 public func deduct(amount:Float):async Float {
currentFunds -=  amount;
  Debug.print(debug_show(currentFunds));
  return currentFunds;
  };
  public query func checkBalance(): async Float {
    return currentFunds;
  };
  public func compound() {
    var currentTime = Time.now();
   let elaspedTime = (currentTime - time) / 100_000_0000;
   currentFunds := currentFunds * (1.01 ** Float.fromInt(elaspedTime));
   time := currentTime;
};
};
