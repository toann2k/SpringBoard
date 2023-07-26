def print_upper_words(word):
    """Print each word on sep line, uppercased."""
    for word in word:
        print(word.upper())


def upper_words2(wordlist):
     for word in wordlist:
         if word.startswith("e") or word.startswith("E"):
             print(word)
             
       

def print_words3(word, must_start_with):
       for word in word:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word)
                break
            

print_words3(["eello", "hey", "Eoodbye", "yo", "yes"], must_start_with={"h", "y"})
                 
       
