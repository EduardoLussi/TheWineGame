// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// These files are dynamically created at test time
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/TheWineGame.sol";
import "./ERC721Holder.sol";

contract TestTheWineGame is ERC721Holder {
    uint16 now_year = 2022;
    uint8 now_month = 12;
    uint8 now_day = 14;

    function claim1Cork(TheWineGame twg) internal {
        string[5] memory guests = ["Kira", "Luna", "Penelope", "Gaspar", "Wesley"];
        twg.claim(guests, "Modern Art Week opening.", 7815685979654, "Salton", "Red wine");
    }

    function claim2Corks(TheWineGame twg) internal {
        string[5] memory guests = ["Kira", "Luna", "Penelope", "Gaspar", "Wesley"];
        twg.claim(guests, "Higgs boson discovery.", 258947613594, "Pata Negra", "Red wine");
        twg.claim(guests, "Modern Art Week opening.", 7815685979654, "Salton", "Red wine");
    }

    function testInitialBalanceOfCorks() public {
        TheWineGame twg = TheWineGame(DeployedAddresses.TheWineGame());

        uint expected = 0;

        Assert.equal(twg.balanceOf(tx.origin), expected, "Owner should wave no corks.");
    }

    function testBalanceAfterMintCorks() public {
        TheWineGame twg = TheWineGame(DeployedAddresses.TheWineGame());

        claim2Corks(twg);

        uint expected = 2;

        Assert.equal(twg.balanceOf(address(this)), expected, "Owner should have 2 corks.");
    }

    function testTimestampToDate() public {
        TheWineGame twg = TheWineGame(DeployedAddresses.TheWineGame());

        (uint16 expected_year, uint8 expected_month, uint8 expected_day) = (now_year, now_month, now_day);
        (uint16 year, uint8 month, uint8 day) = twg.timestampToDate(block.timestamp);

        Assert.equal(year, expected_year, string(abi.encodePacked("Year should be ",expected_year,".")));
        Assert.equal(month, expected_month, string(abi.encodePacked("Month should be ",expected_month,".")));
        Assert.equal(day, expected_day, string(abi.encodePacked("Day should be ",expected_day,".")));
    }

    // Splitted because Solidity does not support too much variables inside a function.
    function testGetCork() public {
        TheWineGame twg = TheWineGame(DeployedAddresses.TheWineGame());

        // claim1Cork(twg);

        uint16 exYear = now_year;
        uint8 exMonth = now_month;
        uint8 exDay = now_day; 
        string[5] memory exGuests = ["Kira", "Luna", "Penelope", "Gaspar", "Wesley"];
        // string memory exTitle = "Modern Art Week opening.";
        // string memory exBrand = "Salton";
        // string memory exName = "Red wine";

        (uint16 year, uint8 month, uint8 day, string[5] memory guests, string memory title, string memory brand, string memory name) = twg.getCork(7815685979654);

        Assert.equal(year, exYear, string(abi.encodePacked("Year should be ",exYear,".")));
        Assert.equal(month, exMonth, string(abi.encodePacked("Year should be ",exMonth,".")));
        Assert.equal(day, exDay, string(abi.encodePacked("Year should be ",exDay,".")));
        for (uint8 i = 0; i < 5; i++) {
            Assert.equal(guests[i], exGuests[i], string(abi.encodePacked("Guest ",i," should be ",exGuests[i],".")));
        }
        // Assert.equal(title, exTitle, string(abi.encodePacked("Year should be ",exTitle,".")));
        // Assert.equal(brand, exBrand, string(abi.encodePacked("Year should be ",exBrand,".")));
        // Assert.equal(name, exName, string(abi.encodePacked("Year should be ",exName,".")));
    }

    // Splitted because Solidity does not support too much variables inside a function.
    function testGetCork2() public {
        TheWineGame twg = TheWineGame(DeployedAddresses.TheWineGame());

        // claim1Cork(twg);

        // uint16 exYear = now_year;
        // uint8 exMonth = now_month;
        // uint8 exDay = now_day; 
        // string[5] memory exGuests = ["Kira", "Luna", "Penelope", "Gaspar", "Wesley"];
        string memory exTitle = "Modern Art Week opening.";
        string memory exBrand = "Salton";
        string memory exName = "Red wine";

        (uint16 year, uint8 month, uint8 day, string[5] memory guests, string memory title, string memory brand, string memory name) = twg.getCork(7815685979654);

        // Assert.equal(year, exYear, string(abi.encodePacked("Year should be ",exYear,".")));
        // Assert.equal(month, exMonth, string(abi.encodePacked("Year should be ",exMonth,".")));
        // Assert.equal(day, exDay, string(abi.encodePacked("Year should be ",exDay,".")));
        // for (uint8 i = 0; i < 5; i++) {
        //     Assert.equal(guests[i], exGuests[i], string(abi.encodePacked("Guest ",i," should be ",exGuests[i],".")));
        // }
        Assert.equal(title, exTitle, string(abi.encodePacked("Year should be ",exTitle,".")));
        Assert.equal(brand, exBrand, string(abi.encodePacked("Year should be ",exBrand,".")));
        Assert.equal(name, exName, string(abi.encodePacked("Year should be ",exName,".")));
    }
}