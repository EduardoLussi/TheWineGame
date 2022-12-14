// SPDX-License-Identifier: MIT
// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TheWineGame is Ownable, ERC721 {
    
    struct WineCork {
        uint256 year;
        uint256 month;
        uint256 day;
        string[5] guests;
        string title;
        uint256 beverage_barcode_data;
        string beverage_brand;
        string baverage_name;
    }
    
    mapping (uint256 => WineCork) tokenIDs;

    string private _currentBaseURI;

    uint256 private tokenIDCounter = 0;

    constructor() ERC721("TheWineGame", "TWG") {
        setBaseURI("localhost:3333");
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _currentBaseURI = baseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _currentBaseURI;
    }

    function mint(string[5] memory guests, string memory title, uint256 beverage_barcode_data, string memory beverage_brand, string memory baverage_name) public {
        uint256 newTokenID = tokenIDCounter;
        tokenIDCounter += 1;
        (uint256 year, uint256 month, uint256 day) = timestampToDate(block.timestamp);

        tokenIDs[newTokenID] = WineCork(year, month, day, guests, title, beverage_barcode_data, beverage_brand, baverage_name);
        _safeMint(msg.sender, newTokenID);
    }

    function timestampToDate(uint timestamp) public pure returns (uint16 year, uint8 month, uint8 day) {
        uint z = timestamp / 86400 + 719468;
        uint era = (z >= 0 ? z : z - 146096) / 146097;
        uint doe = z - era * 146097;
        uint yoe = (doe - doe/1460 + doe/36524 - doe/146096) / 365;
        uint doy = doe - (365*yoe + yoe/4 - yoe/100);
        uint mp = (5*doy + 2)/153;

        day = uint8(doy - (153*mp+2)/5 + 1);
        month = mp < 10 ? uint8(mp + 3) : uint8(mp - 9);
        year = uint16(yoe + era * 400 + (month <= 2 ? 1 : 0));
    }
}