FEATURES = 4
SIZEOFSET = 3

def find_match(available, chosen):
    if len(chosen) != SIZEOFSET:
        for i in range(len(available)-(SIZEOFSET-len(chosen))+1):
            find_match(available[i+1:], chosen+[available[i]])
    else:
        for prop in range(FEATURES):
            uniform = True
            for card in range(SIZEOFSET-1):
                if chosen[card][prop] != chosen[card+1][prop]:
                    uniform = False
                    break
            unique = True
            for first in range(SIZEOFSET-1):
                for sec in range(first+1, SIZEOFSET):
                    if chosen[first][prop] == chosen[sec][prop]:
                        unique = False
                        first = SIZEOFSET-1
                        break
            if not (unique or uniform):
                break
        else:
            print(chosen)

numOfCards = int(input("How many cards are there? "))
cards = []

for i in range(numOfCards):
    cards.append(input("card " + str(i+1) + ": ").split())
    while len(cards[i]) != FEATURES:
        print("You put", len(cards[i]), "features, but you need", FEATURES)
        cards[i] = input("card " + str(i+1) + ": ").split()

find_match(cards, [])