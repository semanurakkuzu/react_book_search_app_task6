import { useState } from 'react'
import {
  Container,
  Center,
  FormControl,
  Input,
  Button,
  Text,
  HStack,
  Box,
  GridItem,
  Grid,
  Card,
  CardBody,
  Image,
  Stack,
  Divider,
  Heading
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
function BookSearch() {
 
  return (
    <>
      <Center h="150px" color="black">
        <Text fontSize="6xl">Search Book</Text>
      </Center>
      <Container marginBottom={10}>
        <FormControl>
          <HStack spacing="25px">
            <Box w="400px" h="25px">
              <Input />
            </Box>
            <Box>
              <Button mt={4} colorScheme="blue" type="submit">
                <Search2Icon />
              </Button>
            </Box>
          </HStack>
        </FormControl>
      </Container>
      <Container maxW="8xl" paddingLeft="8">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem w="100%">
            <Card maxW="sm">
              <CardBody>
                <Center>
                  <Image
                    src="https://img.kitapyurdu.com/v1/getImage/fn:11216058/wh:true/wi:220"
                    alt="Green double couch with wooden legs"
                    borderRadius="md"
                  />
                </Center>
                <Stack mt="6" spacing="3">
                  <Center>
                    <Heading size="md">Kaygısız Beyin</Heading>
                  </Center>
                  <Center>
                    <Text fontSize="sm">Dr. Catherine M. Pittman</Text>
                  </Center>
                  <Button variant="ghost" colorScheme="blue">
                    Details
                  </Button>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default BookSearch
