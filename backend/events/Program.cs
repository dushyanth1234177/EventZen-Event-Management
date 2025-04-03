// See https://aka.ms/new-console-template for more information
using System;
 
// Define a delegate named ButtonClickHandler
public delegate void ButtonClickHandler();
 
// Create a class named Button
public class Button
{
    // Define an event of type ButtonClickHandler
    public event ButtonClickHandler ClickEvent;
 
    // Method to raise the ButtonClickHandler event
    public void Click()
    {
        // Check if ClickEvent is not null before invoking it
        ClickEvent?.Invoke();
    }
}
 
class Program
{
    // Method1 to handle the button click event
    public static void Method1()
    {
        Console.WriteLine("Method1 executed.");
    }
 
    // Method2 to handle the button click event
    public static void Method2()
    {
        Console.WriteLine("Method2 executed.");
    }
 
    static void Main(string[] args)
    {
        // Create an instance of the Button class
        Button button = new Button();
 
        // Create instances of the delegate and register Method1 and Method2
        ButtonClickHandler handler1 = new ButtonClickHandler(Method1);
        ButtonClickHandler handler2 = new ButtonClickHandler(Method2);
 
        // Register the methods with the Button's ClickEvent
        button.ClickEvent += handler1;
        button.ClickEvent += handler2;
 
        // Call the Click method of the Button class, which will invoke the registered methods
        button.Click();
    }
}
 
 
